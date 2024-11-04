export const asyncHandler = (fn) => {
  return (req, res, next).catch((e) => {
    return next();
  });
};
