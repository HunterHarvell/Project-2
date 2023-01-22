const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    console.log("this is before update");
    console.log("this is session id " + req.session.user_id);
    //TODO:replace password:req.body.password in update
    const userData = await User.update(
      { name: req.body.name, email: req.body.email },
      { where: { id: res.session.user_id } }
    );
    console.log("update button user data" + userData);
    //don't neet cause aleady logged in?
    // req.session.save(() => {
    //   res.session.user_id = userData.id;
    //   req.session.logged_in = true;

    res.status(200).json(userData);
    //});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/updateisprovider", async (req, res) => {
  try {
   const userData = await User.update(
      {isProvider: req.body.isProvider},
      { where: { id: req.session.user_id } }
    );
    console.log("update button user data" + userData);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({
        message: "please check your email and password and try again.",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "please check your email and password and try again.",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Successful Login!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
