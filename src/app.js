import 'dotenv/config';

import express from 'express';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/public',
      express.static(path.resolve(__dirname, '..', 'public')),
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(errors());
  }
}

export default new App().server;
