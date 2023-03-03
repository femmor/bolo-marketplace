// Register a new user
const register = async (req, res) => {
  try {
    res.status(200).json({ message: 'User route is working!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

// Login a user
const login = async (req, res) => {
  try {
    res.status(200).json({ message: 'User route is working!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

export { register, login };
