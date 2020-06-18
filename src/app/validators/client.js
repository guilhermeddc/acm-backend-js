import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        slug: Joi.string().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        phone: Joi.string().max(11).required(),
        description: Joi.string().required(),
        cash: Joi.number().required(),
        genre_id: Joi.number().required(),
        city_id: Joi.number().required(),
        ethnicity_id: Joi.number().required(),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
