'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'genres',
      [{ name: 'Homen' }, { name: 'Mulher' }, { name: 'Transex' }],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', [
      { name: 'Homen' },
      { name: 'Mulher' },
      { name: 'Transex' },
    ]);
  },
};
