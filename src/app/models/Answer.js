import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
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
      through: 'client_answers',
      foreignKey: 'answer_id',
      as: 'answers',
    });
  };
}

export default Answer;
