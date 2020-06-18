import Sequelize, { Model } from 'sequelize';

class ClientService extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        service_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.Service, { foreignKey: 'service_id', as: 'service' });
  };
}

export default ClientService;
