export const validation = (schema) => {
  return (req, res, next) => {
    const data = { ...req.body, ...req.params, ...req.query };
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      const messages = error.details.map((errorObj) => {
        return errorObj.message;
      });
      const err = new Error(messages, 400);
      return next(err);
    }
    next();
  };
};
