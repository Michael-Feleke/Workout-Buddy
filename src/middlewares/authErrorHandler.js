export const authErrorHandler = (err, req, res, next) => {
  const sendErrorResponse = (field, message, statusCode = 400) => {
    return res.status(statusCode).json({
      status: "error",
      message: "Validation failed",
      errors: [{ field, message }],
      statusCode,
    });
  };

  if (err.code === 11000) {
    return sendErrorResponse("email", "The email is already registered");
  }

  if (err.message.includes("User validation failed")) {
    const errors = Object.values(err.errors).map(({ properties }) => ({
      field: properties.path,
      message: properties.message,
    }));

    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors,
      statusCode: 400,
    });
  }

  const errorMessages = {
    "Incorrect email": {
      field: "email",
      message: "The email is not registered",
    },
    "Incorrect password": { field: "password", message: "Incorrect password" },
  };

  if (errorMessages[err.message]) {
    const { field, message } = errorMessages[err.message];
    return sendErrorResponse(field, message);
  }

  next(err);
};
