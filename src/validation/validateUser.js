import Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .lowercase()
    .messages({
      'string.email': 'Please enter a valid email',
      'any.required': 'Email is required',
      'string.lowercase': 'Email must be lowercase',
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$])(?=.*\d)[A-Za-z\d!@#$]{8,}$/)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!,@,#,$)',
      'any.required': 'Password is required',
    }),
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorDetails = error.details.map((detail) => ({
        field: detail.context.label,
        message: detail.message,
      }));
  
      return res.status(400).send({
        status: "error",
        message: "Validation failed",
        errors: errorDetails,
        statusCode: 400,
      });
    }
    next();
  };
  
  export { validateUser };
  
