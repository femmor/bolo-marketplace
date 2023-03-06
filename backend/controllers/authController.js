import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

// Register a new user
const register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({
      message: 'User created successfully!',
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Login a user
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return next(createError(400, 'User not found!'));
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(createError(400, 'Invalid credentials!'));
    } else {
      // Create a token
      const token = jwt.sign(
        { id: user._id, isSeller: user.isSeller },
        process.env.JWT_SECRET
      );

      // Hide the password
      const { password, ...info } = user._doc;
      res
        .cookie('accessToken', token, {
          httpOnly: true,
        })
        .status(200)
        .json(info);
    }
  } catch (error) {
    next(error);
  }
};

// Logout a user
const logout = async (req, res, next) => {
  res
    .clearCookie('accessToken', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json({ message: 'User has been logged out!' });
};

export { register, login, logout };
