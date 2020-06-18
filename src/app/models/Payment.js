import Sequelize, { Model } from 'sequelize';

class Payment extends Model {
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
      through: 'client_payments',
      foreignKey: 'payment_id',
      as: 'payments',
    });
  };
}

export default Payment;
