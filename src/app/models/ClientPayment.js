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
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.belongsTo(models.Payment, { foreignKey: 'payment_id' });
  };
}

export default ClientPayment;
