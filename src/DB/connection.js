import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASEURL);

    console.log(`DataBase connect successfully`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
  }
};
