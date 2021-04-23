const Joi = require ('@hapi/joi');

const registerValidation = (data) => {
    const Schema = Joi.object({
        adress: Joi.string(),
        first_name : Joi.string()
                        .required()
                        .min(4),
        last_name : Joi.string()
                        .required()
                        .min(4),
        email : Joi.string()
                    .email()
                    .required()
                    .min(6),
        password : Joi.string()
                        .required()
                        .min(6)
    });
    return Schema.validate(data);
};

const loginValidation = (data) =>{
    const Schema = Joi.object({
        email : Joi.string()
                    .required()
                    .email()
                    .min(6),
        password : Joi.string()
                        .required()
                        .min(6)
    });
    return Schema.validate(data);
}

module.exports = {registerValidation, loginValidation};