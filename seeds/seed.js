const sequelize = require('../config/connection');
const { User, ProviderInfo, Provider, Service, Review } = require('../models');

const userData = require('./userData.json');
const providerData = require('./providerData.json');
const providerInfoData = require("./providerInfoData.json");
const reviewData = require("./reviewData.json");
const serviceData = require("./serviceData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const providers = await Provider.bulkCreate(providerData, {
    individualHooks: true,
    returning: true,
  });

  const providerInfo = await ProviderInfo.bulkCreate(providerInfoData, {
    individualHooks: true,
    returning: true,
  });

  const review = await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  const service = await Service.bulkCreate(serviceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
