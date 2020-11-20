'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.belongsTo(models.coordinador, {
        foreignKey: "coordinador_id",
      });
      usuario.belongsTo(models.desarrollador, {
        foreignKey: "desarrollador_id",
      });
      usuario.belongsTo(models.cliente, {
        foreignKey: "cliente_id",
      });
    }
  };
  usuario.init({
    mail: DataTypes.STRING,
    pass: DataTypes.STRING,
    coordinador_id: DataTypes.STRING,
    desarrollador_id: DataTypes.STRING,
    cliente_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
    timestamps: false,
  });
  usuario.removeAttribute("id");
  return usuario;
};