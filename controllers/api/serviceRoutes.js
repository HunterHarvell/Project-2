const router = require("express").Router();
const { Service, ProviderInfo } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const serviceData = await Service.findAll({ include: ProviderInfo });
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const serviceData = await Service.findAll(req.params.id, {
      include: ProviderInfo,
    });
    if (!serviceData) {
      res.status(404).json({ message: "couldn't find the service" });
    } else {
      res.status(200).json(serviceData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const serviceData = await Service.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const serviceData = await Service.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!serviceData[0]) {
      res.status(404).json({ message: "couldn't find the service" });
      return;
    }
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const serviceData = await Service.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (serviceData) {
      res.status(200).json(serviceData);
    } else {
      res.status(404).json({ message: "couldn't find the service" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
