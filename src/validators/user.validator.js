import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[A-Za-z][A-Za-z]{7,15}$/).required().messages({
        'string.pattern.base': 'Use only letters, 7 - 15 symbols',
        'string.required': 'required'
    }),
    username: Joi.string().regex(/^[A-Za-z][A-Za-z0-9_]{7,20}$/).required().messages({
        'string.pattern.base': 'Use not more than 29 symbols',
        'string.required': 'required'
    }),
    email: Joi.string().regex(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).required().messages({
        'string.pattern.base': 'Not an email format',
        'string.required': 'required'
    })
})

export {
    userValidator
}