import Sequelize, { Model } from 'sequelize';

class Place extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsToMany(models.Place, {
      through: 'client_places',
      foreignKey: 'place_id',
      as: 'places',
    });
  };
}

export default Place;
