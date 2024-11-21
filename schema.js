const Joi = require('joi');

module.exports.gundamSchema = Joi.object({
    name:Joi.string().min(5).max(10).required(),
    description: Joi.string().min(5).max(20).required(),
    category:Joi.string().valid('HG','NG','PG','SD','RG').required(),
    price: Joi.number().greater(0).required(),
});