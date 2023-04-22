import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/[A-Za-z0-9_]{3,100}$/).required().messages({
        'string.required': 'required',
        'string.pattern.base': '-10 letters and no numbers'
    }),
    email: Joi.string().regex(/[a-z0-9_]+@[a-z]+\.[a-z]{2,3}/).required().messages({
        'string.required': 'required',
        'string.pattern.base': 'not an email format'
    }),
    body: Joi.string().regex(/[A-Za-z0-9_]{7,500}$/).required().messages({
        'string.required': 'required',
        'string.pattern.base': 'not more than 50 symbols'
    })
});

export {
    commentValidator
}