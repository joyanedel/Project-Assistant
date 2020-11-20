'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class desarrollador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      desarrollador.hasOne(models.usuario, {
        foreignKey: "desarrollador_id",
      });
    }
  };
  desarrollador.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    mail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'desarrollador',
    timestamps: false,
  });
  return desarrollador;
};