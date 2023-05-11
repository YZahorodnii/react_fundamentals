import Joi from "joi";

const authValidator = Joi.object({
    username: Joi.string().required().regex(/^[a-zA-Z]\w{1,19}$/).messages({
        'string.pattern.base': 'First char must be letter, min 2 and max 20 chars',
        'string.required': 'this field is required'
    }),
    password: Joi.string().required().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).messages({
        'string.pattern.base': 'Password must have 1 uppercase, 1 number, 1 special symbol, 1 lowercase, min 8 max 20 chars',
        'string.required': 'This field is required'
    })
})

export {authValidator};