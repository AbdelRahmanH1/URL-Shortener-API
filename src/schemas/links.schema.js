import Joi from 'joi';

export const urlOrignalSchema = Joi.object({
  url: Joi.string()
    .uri({
      scheme: [/http|https/],
    })
    .required(),
}).required();
