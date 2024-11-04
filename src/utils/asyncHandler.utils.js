export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      const error = new Error(err);
      return next(error);
    });
  };
};
