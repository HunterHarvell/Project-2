const router = require("express").Router();
const userRoutes = require("./userRoutes");
const providerInfoRoutes = require("./providerInfoRoutes");
const petRoutes = require("./petRoutes");
const reviewRoutes = require("./reviewRoutes");
const serviceRoutes = require("./serviceRoutes");


router.use("/users", userRoutes);
router.use("/providers", providerInfoRoutes);
router.use("/services", serviceRoutes);
router.use("/reviews", reviewRoutes);
router.use("/pets", petRoutes);


module.exports = router;
