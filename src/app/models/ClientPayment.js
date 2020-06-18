import Sequelize, { Model } from 'sequelize';

class ClientPayment extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        payment_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.Payment, { foreignKey: 'payment_id', as: 'payment' });
  };
}

export default ClientPayment;
