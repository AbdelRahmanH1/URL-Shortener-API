import Joi from 'joi';

export const urlOrignalSchema = Joi.object({
  url: Joi.string()
    .uri({
      scheme: [/http|https/],
    })
    .required(),
}).required();

export const shortUrlSchema = Joi.object({
  shortUrl: Joi.string().length(6).required(),
}).required();
