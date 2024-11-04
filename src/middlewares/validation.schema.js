export const validation = (schema) => {
  return (req, res, next) => {
    const data = { ...req.body, ...req.params, ...req.query };

    const result = schema.validate(data, { abortEarly: false });

    if (result.error) {
      const messages = result.error.details.map((errorOBJ) => {
        return errorOBJ.message;
      });
      return next(new Error(messages, { cause: 401 }));
    }
    return next();
  };
};
