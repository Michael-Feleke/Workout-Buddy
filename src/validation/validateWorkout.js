import Joi from "joi";

const workoutSchema = Joi.object({
  title: Joi.string().trim().min(3).max(255).required().messages({
    "string.base": "Title should be a type of text",
    "string.empty": "Title cannot be an empty field",
    "string.min": "Title should have a minimum length of {#limit}",
    "string.max": "Title should have a maximum length of {#limit}",
    "any.required": "Title is a required field",
  }),
  reps: Joi.number().min(1).max(255).required().messages({
    "number.base": "Reps should be a type of number",
    "number.empty": "Reps cannot be an empty field",
    "number.min": "Reps should have a minimum length of {#limit}",
    "number.max": "Reps should have a maximum length of {#limit}",
    "any.required": "Reps is a required field",
  }),
  load: Joi.number().min(1).max(255).required().messages({
    "number.base": "Load should be a type of number",
    "number.empty": "Load cannot be an empty field",
    "number.min": "Load should have a minimum length of {#limit}",
    "number.max": "Load should have a maximum length of {#limit}",
    "any.required": "Load is a required field",
  }),
});

const validateWorkout = (req, res, next) => {
  const { error } = workoutSchema.validate(req.body, { abortEarly: false });
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

export { validateWorkout };
