'use strict';

const { create } = require('ts-node');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize){
   
        return queryInterface.bulkInsert('Categories',[
          {
            name:'Nathionals News',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name:'Internationals News',
            createdAt: new Date(),
            updatedAt: new Date()
            
          },
          {
            name:'Food',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name:'Economics',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name:'Socials',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name:'Medicine',
            createdAt: new Date(),
            updatedAt: new Date()
           
          },
      ] );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories',{},null);
  }
};
