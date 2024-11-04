import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
const PORT = process.env.PORT;

console.log(process.env.NODE_ENV);

app
  .listen(PORT, () => {
    console.log(`Server Start at PORT ${PORT}`);
  })
  .on('error', (err) => {
    console.log(`Server Failed... ${err}`);
  });
