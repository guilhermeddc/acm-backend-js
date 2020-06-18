import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
      },
      {
        abortEarly: false,
      },
    ),
  }),
  update: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().optional(),
        email: Joi.string().optional().email(),
        password: Joi.string().optional(),
        oldPassword: Joi.string().optional(),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
