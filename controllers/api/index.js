const router = require("express").Router();
const userRoutes = require("./userRoutes");
const providerInfoRoutes = require("./providerInfoRoutes");
const reviewRoutes = require("./reviewRoutes");
const serviceRoutes = require("./serviceRoutes");
router.use("/users", userRoutes);
router.use("/providers", providerInfoRoutes);
router.use("/services", serviceRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
