'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cliente.hasOne(models.usuario, {
        foreignKey: "cliente_id",
      });
    }
  };
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    mail: DataTypes.STRING,
    empresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    timestamps: false,
  });
  return cliente;
};