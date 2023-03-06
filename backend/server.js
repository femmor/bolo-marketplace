import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import errorhandler from './middleware/errorHandler.js';

// Routes import
import authRoute from './routes/authRoute.js';
import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import gigRoutes from './routes/gigRoutes.js';
import conversationRoutes from './routes/conversationRoutes.js';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://127.0.0.1:5174',
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/gigs', gigRoutes);
app.use('/api/conversations', conversationRoutes);

// errorMiddleware
app.use(errorhandler);

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
