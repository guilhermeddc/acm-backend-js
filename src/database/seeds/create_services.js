'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'services',
      [
        { name: 'Acompanhante' },
        { name: 'Ativa' },
        { name: 'BDSM' },
        { name: 'Beijo grego' },
        { name: 'Beijo na boca' },
        { name: 'Chuva dourada' },
        { name: 'Dominação' },
        { name: 'Festas e Eventos' },
        { name: 'Fetiche' },
        { name: 'Inversão de papéis' },
        { name: 'Massagem' },
        { name: 'Massagem Tântrica' },
        { name: 'Masturbação' },
        { name: 'Passiva' },
        { name: 'Sexo anal' },
        { name: 'Sexo grupal' },
        { name: 'Sexo oral' },
        { name: 'Sexo vaginal' },
        { name: 'Striptease' },
      ],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('services', [
      { name: 'Acompanhante' },
      { name: 'Ativa' },
      { name: 'BDSM' },
      { name: 'Beijo grego' },
      { name: 'Beijo na boca' },
      { name: 'Chuva dourada' },
      { name: 'Dominação' },
      { name: 'Festas e Eventos' },
      { name: 'Fetiche' },
      { name: 'Inversão de papéis' },
      { name: 'Massagem' },
      { name: 'Massagem Tântrica' },
      { name: 'Masturbação' },
      { name: 'Passiva' },
      { name: 'Sexo anal' },
      { name: 'Sexo grupal' },
      { name: 'Sexo oral' },
      { name: 'Sexo vaginal' },
      { name: 'Striptease' },
    ]);
  },
};
