import express from 'express';

export const startServer = () => {
  const app = express();
  app.use(express.json());
  return app;
};
