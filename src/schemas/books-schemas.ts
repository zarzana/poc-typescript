import Joi from 'joi';

export const createBookSchema = Joi.object({
    title: Joi.string().required(),
    country: Joi.string().required(),
    series: Joi.string(),
    genre: Joi.string().required(),
    publication_date: Joi.string().isoDate().isoDate().required(),
});
