'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Userspreferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bgcolor: {
        type: Sequelize.STRING
      },  bgcolorsmall: {
        type: Sequelize.STRING
      },

      gender: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      isActived: {
        type:Sequelize.BOOLEAN
      }
      ,
      emotionsmessage: {
        type: Sequelize.TEXT
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Userspreferences');
  }
};