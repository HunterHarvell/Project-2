const router = require("express").Router();
const { ProviderInfo, Service } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const providerInfoData = await providerInfoData.findAll({
      include: Service,
    });
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ProviderInfo = await ProviderInfo.findAll(req.params.id, {
      include: Service,
    });
    if (!providerInfoData) {
      res
        .status(404)
        .json({ message: "couldn't find information on provider" });
    } else {
      res.status(200).json(providerInfoData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!providerInfoData[0]) {
      res
        .status(404)
        .json({ message: "couldn't find information on provider" });
      return;
    }
    res.status(200).json(providerInfoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const providerInfoData = await ProviderInfo.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (providerInfoData) {
      res.status(200).json(providerInfoData);
    } else {
      res.status(404).json({ message: "couldn't find info on provider" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
