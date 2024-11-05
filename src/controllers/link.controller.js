import { asyncHandler } from '../utils/asyncHandler.utils.js';
import { generateShortUrl } from '../services/createURL.services.js';
import linkModel from '../DB/Models/link.model.js';

export const createShortUrl = asyncHandler(async (req, res, next) => {
  const { url } = req.body;
  //check if the url is exist or not
  const isExist = await linkModel.findOne({ orignal: url });
  if (isExist) {
    const err = new Error('Link already exist', { cause: 401 });
    return next(err);
  }
  //generate new Url
  const newUrl = generateShortUrl(6);
  const fullUrl = `${req.protocol}://${req.get('host')}/${newUrl}`;
  await linkModel.create({ orignal: url, shortId: newUrl });
  return res.status(201).json({ success: true, link: fullUrl });
});

export const getOrginal = asyncHandler(async (req, res, next) => {
  const { shortUrl } = req.params;
  console.log(shortUrl);

  const link = await linkModel.findOne({ shortId: shortUrl });
  if (!link) {
    const err = new Error('Link not found', { cause: 404 });
    next(err);
  }
  link.clicks += 1;
  await link.save();
  return res.redirect(link.orignal);
});

export const getStats = asyncHandler(async (req, res, next) => {
  const { shortUrl } = req.params;

  const link = await linkModel.findOne({ shortId: shortUrl });
  if (!link) {
    const err = new Error('Link not found', { cause: 404 });
    return next(err);
  }
  res.status(200).json({
    original: link.orignal,
    shortId: link.shortId,
    clicks: link.clicks,
    createdAt: link.createdAt,
    expirationDate: link.expirationDate,
  });
});
