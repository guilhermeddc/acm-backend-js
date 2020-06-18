'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'places',
      [
        { name: 'Aceita viajar' },
        { name: 'Domicílio' },
        { name: 'Hotéis / Motéis' },
        { name: 'Local próprio' },
      ],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('places', [
      { name: 'Aceita viajar' },
      { name: 'Domicílio' },
      { name: 'Hotéis / Motéis' },
      { name: 'Local próprio' },
    ]);
  },
};
