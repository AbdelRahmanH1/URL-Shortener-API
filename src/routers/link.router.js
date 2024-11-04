import { Router } from 'express';
import * as controller from '../controllers/link.controller.js';
import { validation } from '../middlewares/validation.schema.js';
import * as schema from '../schemas/links.schema.js';
const route = Router();

route.post(
  '/shorten',
  validation(schema.urlOrignalSchema),
  controller.createShortUrl,
);
route.get('/:url', controller.getOrginal);
export default route;
