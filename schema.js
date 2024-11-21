const Joi = require('joi');

module.exports.gundamSchema = Joi.object({
    name:Joi.string().min(5).max(30).required(),
    description: Joi.string().min(5).max(70).required(),
    category:Joi.string().valid('HG','NG','PG','SD','RG').required(),
    price: Joi.number().greater(0).required(),
});