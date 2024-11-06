import { startServer } from './index.js';
import dotenv from 'dotenv';
import { connectDB } from './DB/connection.js';
import urlRouter from './routers/link.router.js';
import { errorResponse } from './utils/errorResponse.utils.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = startServer();
const PORT = process.env.PORT;

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
    console.log(`Server Start at port ${PORT}`);
  })
  .on('error', () => {
    console.log(`Server Error`);
  });
