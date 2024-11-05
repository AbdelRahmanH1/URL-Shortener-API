import { Router } from 'express';
import * as controller from '../controllers/link.controller.js';
import { validation } from '../middlewares/validation.schema.js';
import * as schema from '../schemas/link.schema.js';
const route = Router();

route.post(
  '/shorten',
  validation(schema.urlOrignalSchema),
  controller.createShortUrl,
);
route.get(
  '/:shortUrl',
  validation(schema.shortUrlSchema),
  controller.getOrginal,
);

route.get(
  '/stats/:shortUrl',
  validation(schema.shortUrlSchema),
  controller.getStats,
);
export default route;
