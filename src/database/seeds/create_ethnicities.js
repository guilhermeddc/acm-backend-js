'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'ethnicities',
      [
        { name: 'Branco' },
        { name: 'Mestiço' },
        { name: 'Mulato' },
        { name: 'Negro' },
        { name: 'Oriental' },
        { name: 'Pardo' },
      ],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ethnicities', [
      { name: 'Branco' },
      { name: 'Mestiço' },
      { name: 'Mulato' },
      { name: 'Negro' },
      { name: 'Oriental' },
      { name: 'Pardo' },
    ]);
  },
};
