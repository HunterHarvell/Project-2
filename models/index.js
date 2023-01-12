const User = require('./User');
const Review = require('./Review');
const Provider = require('./Provider');
const Service = require('./Service');
const ProviderInfo = require('./ProviderInfo');

Provider.hasA(ProviderInfo, {
  onDelete: 'CASCADE'
});
ProviderInfo.belongsTo(Provider,{
  foreignKey: 'provider_id'
})

User.hasMany(Review, {
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Provider.hasMany(Review, {
  onDelete: 'CASCADE'
});

Review.belongsTo(Provider, {
  foreignKey: 'provider_id'
});

Provider.hasMany(Service, {
  onDelete: 'CASCADE'
});

Service.belongsTo(Provider, {
  foreignKey: "provider_id",
});




module.exports = { User, Review, Provider, ProviderInfo, Service };
