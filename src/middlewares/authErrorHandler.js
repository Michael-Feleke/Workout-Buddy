export const authErrorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: [{ field: "email", message: "The email is already registered" }],
      statusCode: 400,
    });
  }

  next(err);
};
