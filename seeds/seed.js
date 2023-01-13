const sequelize = require('../config/connection');
const { User, ProviderInfo, Service, Review, Pet } = require('../models');

const userData = require('./userData.json');
const providerInfoData = require('./providerInfoData.json');
const reviewData = require('./reviewData.json');
const serviceData = require('./serviceData.json');
const petData = require('./petData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
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

  const pet = await Pet.bulkCreate(petData, {
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
