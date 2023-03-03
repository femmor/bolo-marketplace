import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// Register a new user
const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

// Login a user
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      res.status(404).json({ message: 'User not found!' });
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid username or password!' });
    } else {
      // Hide the password
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

// Login a user
const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

export { register, login, logout };
