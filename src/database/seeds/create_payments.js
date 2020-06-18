'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'payments',
      [
        { name: 'Cartão de crédito' },
        { name: 'Cartão de débito' },
        { name: 'Dinheiro' },
      ],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payments', [
      { name: 'Cartão de crédito' },
      { name: 'Cartão de débito' },
      { name: 'Dinheiro' },
    ]);
  },
};
