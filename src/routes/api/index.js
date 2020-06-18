import { Router } from 'express';

import answer from './answer';
import city from './city';
import client from './client';
import clientAnswer from './clientAnswer';
import clientPlace from './clientPlace';
import clientPayment from './clientPayment';
import clientService from './clientService';
import ethnicity from './ethnicity';
import genre from './genre';
import payment from './payment';
import place from './place';
import service from './service';
import session from './session';
import state from './state';
import user from './user';

const routes = new Router();

routes.use('/answers', answer);
routes.use('/cities', city);
routes.use('/clients', client);
routes.use('/client-answers', clientAnswer);
routes.use('/client-places', clientPlace);
routes.use('/client-payments', clientPayment);
routes.use('/client-services', clientService);
routes.use('/ethnicities', ethnicity);
routes.use('/genres', genre);
routes.use('/payments', payment);
routes.use('/places', place);
routes.use('/services', service);
routes.use('/sessions', session);
routes.use('/states', state);
routes.use('/users', user);

export default routes;
