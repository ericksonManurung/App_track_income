'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Expenses', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_UserId_Expenses',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Balances', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_UserId_Balances',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('Expenses','fkey_UserId_Expenses')
     await queryInterface.removeConstraint('Expenses','fkey_UserId_Balances')
  }
};
