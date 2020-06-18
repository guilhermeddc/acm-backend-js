import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        client_id: Joi.number().required(),
        service_id: Joi.number().required(),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
