'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      mail: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      coordinador_id: {
        type: Sequelize.STRING,
        references:{
          model:"coordinadors",
          key:"id",
        }
      },
      desarrollador_id: {
        type: Sequelize.STRING,
        references:{
          model:"desarrolladors",
          key:"id",
        }
      },
      cliente_id: {
        type: Sequelize.STRING,
        references:{
          model:"clientes",
          key:"id",
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};