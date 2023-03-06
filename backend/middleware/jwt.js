import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  // Check if it is the right user
  const token = req.cookies.accessToken;

  // If there is no token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }

  // If there is a token
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Token is not valid!' });
    }
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });

  next();
};
