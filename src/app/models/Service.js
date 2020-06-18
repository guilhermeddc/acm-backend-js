import Sequelize, { Model } from 'sequelize';

class Service extends Model {
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
      through: 'client_services',
      foreignKey: 'service_id',
      as: 'services',
    });
  };
}

export default Service;
