const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

const taskValidation = (data) => {
    const schema = Joi.object({
      title: Joi.string().min(3),
      description: Joi.string().min(5),
      status: Joi.string().valid('pending', 'in_progress', 'completed')
    });
    return schema.validate(data);
  };
  

module.exports = {
  registerValidation,
  loginValidation,
  taskValidation
};