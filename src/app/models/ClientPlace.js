import Sequelize, { Model } from 'sequelize';

class ClientPlace extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        place_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.belongsTo(models.Place, { foreignKey: 'place_id' });
  };
}

export default ClientPlace;
