const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProviderInfo extends Model {}

ProviderInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    small:{
      type: dataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    medium:{
      type: dataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    large:{
      type: dataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'provider',
        key: 'id',
      },
    },
  },
  {   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'providerInfo',
  }
);

module.exports = ProviderInfo;
