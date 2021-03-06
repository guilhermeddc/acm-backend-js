import Sequelize, { Model } from 'sequelize';

class ClientAnswer extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        answer_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.Answer, { foreignKey: 'answer_id', as: 'answer' });
  };
}

export default ClientAnswer;
