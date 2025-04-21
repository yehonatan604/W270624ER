import Joi from 'joi';

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email': 'Email must be a valid email address.',
        'string.empty': 'Email is required.',
    }),
    password: Joi.string().ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/).rule({
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be between 7 to 20 characters long."
    })
})