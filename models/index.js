const User = require('./User');
const Review = require('./Review');
const Service = require('./Service');
const ProviderInfo = require('./ProviderInfo');
const Pet = require('./Pet');

User.hasOne(ProviderInfo, {
  onDelete: 'CASCADE'
});
ProviderInfo.belongsTo(User,{
  foreignKey: 'user_id'
})

User.hasMany(Review, {
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

ProviderInfo.hasMany(Review, {
  onDelete: 'CASCADE'
});

Review.belongsTo(ProviderInfo, {
  foreignKey: 'providerInfo_id'
});

ProviderInfo.hasMany(Service, {
  onDelete: 'CASCADE'
});

Service.belongsTo(ProviderInfo, {
  foreignKey: "providerInfo_id",
});

User.hasMany(Pet,{
  onDelete: 'CASCADE'
});

Pet.belongsTo(User,{
  foreignKey: "user_id",
});



module.exports = { User, Review, ProviderInfo, Pet, Service };
