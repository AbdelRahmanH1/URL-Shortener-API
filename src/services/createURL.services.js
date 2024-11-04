export const generateShortUrl = (length) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let shortUrl = '';

  for (let i = 0; i < length; i++) {
    shortUrl += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return shortUrl;
};

console.log(generateShortUrl(6));
