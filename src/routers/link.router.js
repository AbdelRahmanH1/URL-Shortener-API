import { Router } from 'express';
import * as controller from '../controllers/link.controller.js';

const route = Router();

route.post('/shorten', controller.createShortUrl);
route.get('/:url', controller.getOrginal);
export default route;
