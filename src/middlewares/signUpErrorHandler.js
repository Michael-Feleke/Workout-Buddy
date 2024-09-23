export const signUpErrorHandler = (err, req, res, next) => {
  let errors = {
    status: "error",
    message: "Validation failed",
    errors: [],
  };

  if (err.code === 11000) {
    errors.errors.push({
      field: "email",
      message: "The email is already registered",
    });
    return res.status(400).json({
      status: "error",
      message: errors.message,
      errors: errors.errors,
      statusCode: 400,
    });
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors.errors.push({
        field: properties.path,
        message: properties.message,
      });
    });
    return res.status(400).json({
      status: "error",
      message: errors.message,
      errors: errors.errors,
      statusCode: 400,
    });
  }
  next(err);
};
