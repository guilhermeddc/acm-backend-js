import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().required(),
        slug: Joi.string().required(),
        state: Joi.number().required(),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
