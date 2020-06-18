'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cash: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      featured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      super_featured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      ethnicity_id: {
        type: Sequelize.INTEGER,
        references: { model: 'ethnicities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: { model: 'genres', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('clients'),
};
