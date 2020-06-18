import Sequelize, { Model } from 'sequelize';

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        image: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/public/${this.image}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate = (models) => {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  };
}

export default Image;
