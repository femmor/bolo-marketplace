import User from '../models/userModel.js';

// Register a new user
const register = async (req, res) => {
  try {
    const newUser = new User(req.body);

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

// Login a user
const login = async (req, res) => {
  try {
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
