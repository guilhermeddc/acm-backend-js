import Sequelize from 'sequelize';

import Answer from '../app/models/Answer';
import City from '../app/models/City';
import Client from '../app/models/Client';
import ClientAnswer from '../app/models/ClientAnswer';
import ClientPlace from '../app/models/ClientPlace';
import ClientPayment from '../app/models/ClientPayment';
import ClientService from '../app/models/ClientService';
import Ethnicity from '../app/models/Ethnicity';
import Genre from '../app/models/Genre';
import Image from '../app/models/Image';
import Payment from '../app/models/Payment';
import Place from '../app/models/Place';
import State from '../app/models/State';
import Service from '../app/models/Service';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [
  User,
  Answer,
  City,
  State,
  Ethnicity,
  Image,
  Genre,
  Service,
  Place,
  Payment,
  Client,
  ClientAnswer,
  ClientPlace,
  ClientPayment,
  ClientService,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
