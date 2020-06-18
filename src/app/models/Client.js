import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        slug: Sequelize.STRING,
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/public/${this.image}`;
          },
        },
        age: Sequelize.INTEGER,
        phone: Sequelize.STRING,
        description: Sequelize.TEXT,
        cash: Sequelize.DECIMAL,
        active: Sequelize.BOOLEAN,
        featured: Sequelize.BOOLEAN,
        super_featured: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Ethnicity, {
      foreignKey: 'ethnicity_id',
      as: 'ethnicity',
    });
    this.belongsTo(models.Genre, { foreignKey: 'genre_id', as: 'genre' });
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
    this.hasMany(models.Image, { as: 'images' });
    this.belongsToMany(models.Place, {
      through: 'client_places',
      foreignKey: 'client_id',
      as: 'places',
    });
    this.belongsToMany(models.Place, {
      through: 'client_payments',
      foreignKey: 'client_id',
      as: 'payments',
    });
    this.belongsToMany(models.Place, {
      through: 'client_answers',
      foreignKey: 'client_id',
      as: 'answers',
    });
    this.belongsToMany(models.Place, {
      through: 'client_services',
      foreignKey: 'client_id',
      as: 'services',
    });
  };
}

export default Client;
