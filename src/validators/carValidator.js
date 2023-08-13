import Joi from "joi";


const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]{1,20}$/).required().messages({
        'string.pattern.base': 'Має бути тільки літери, мин 1 макс 20 символів',
        'string.required' : 'Має бути заповнене'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export default carValidator;