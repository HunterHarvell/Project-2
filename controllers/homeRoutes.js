const router = require("express").Router();
const { ProviderInfo, User, Service } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const providerData = await ProviderInfo.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const providers = providerData.map((providerInfo) =>
      providerInfo.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("login", {
      providers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/");

router.get("/providers/:id", async (req, res) => {
  try {
    const providerData = await ProviderInfo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const providers = providerData.get({ plain: true });

    res.render("provider-signup", {
      ...providers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: ProviderInfo }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/listings", withAuth, async (req, res) => {
  try {
    const userData = await Service.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: ProviderInfo }],
    });

    const user = userData.get({ plain: true });

    res.render("listings", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/listings");
    return;
  }

  res.render("login");
});

//FIXME: remove used to see handlebars
router.get("/psignup", (req, res) => {
  res.render("provider-signup");
});

module.exports = router;
