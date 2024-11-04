import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './DB/connection.js';
import urlRouter from './routers/link.router.js';
import { errorResponse } from './utils/errorResponse.utils.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
await connectDB();
app.get('/', (req, res, next) => {
  return res.json('Hello');
});
app.use(urlRouter);
app.all('*', (req, res, next) => {
  const err = new Error('Content not found', { cause: 404 });
  next(err);
});
app.use(errorResponse);

app
  .listen(PORT, () => {
    console.log(`Server Start at PORT ${PORT}`);
  })
  .on('error', (err) => {
    console.log(`Server Failed... ${err}`);
  });
