import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().required(),
        uf: Joi.string().required().max(2),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
