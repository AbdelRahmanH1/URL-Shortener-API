import { connectDB } from './DB/connection.js';
import urlRouter from './routers/link.router.js';
import { errorResponse } from './utils/errorResponse.utils.js';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

await connectDB();
app.get('/', (req, res, next) => {
  return res.send('Hello');
});

app.use(urlRouter);
app.all('*', (req, res, next) => {
  const err = new Error('Content not found', { cause: 404 });
  next(err);
});
app.use(errorResponse);

app.listen(PORT, () => {
  console.log(`Server Start at port ${PORT}`);
});

app.on('error', () => {
  console.log(`Server Error`);
});
export const server = app;
