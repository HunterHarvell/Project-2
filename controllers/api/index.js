const router = require("express").Router();
const userRoutes = require("./userRoutes");
const providerInfoRoutes = require("./listingRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
