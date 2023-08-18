import mongoose from 'mongoose';

export async function connectToDb() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('Connected to MongoDB server successfully');
    });

    connection.on('error', (error) => {
      console.log('MongoDB connection error: ' + error);
      process.exit();
    });
  } catch (error) {
    console.log('Something went wrong');
    console.log(error);
  }
}
