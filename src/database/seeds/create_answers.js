'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'answers',
      [{ name: 'Casais' }, { name: 'Homens' }, { name: 'Mulheres' }],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('answers', [
      { name: 'Casais' },
      { name: 'Homens' },
      { name: 'Mulheres' },
    ]);
  },
};
