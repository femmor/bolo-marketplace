import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

export const verifyToken = async (req, res, next) => {
  // Check if it is the right user
  const token = req.cookies.accessToken;

  // If there is no token
  if (!token) {
    return next(createError(401, 'Unauthorized!'));
  }

  // If there is a token
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return next(createError(403, 'Token is not valid!'));
    }
    req.userId = payload.id;
    req.isSeller = payload.isSeller;

    // Add next to move to the next function/middleware
    next();
  });
};
