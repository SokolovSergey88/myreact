import Joi from "joi";
export const schema = Joi.object({
    email: Joi.string().required().min(5).max(20).pattern(new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')).messages({
        "string.empty" : "must be required"
    }),
    password: Joi.number().required().messages({
        "any.required" : "Must be required"
    }),
});