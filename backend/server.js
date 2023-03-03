import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;

const startApp = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Server failed to start!' + error);
    process.exit(1);
  }
};

startApp();
