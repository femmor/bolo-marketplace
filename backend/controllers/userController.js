import User from '../models/userModel.js';

// Delete a user
const deleteUser = async (req, res) => {
  try {
    // If the token is valid and the user is the right user
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // check if user id is the same as the id in the token
    if (req.userId !== user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized!' });
    }

    // Delete the user
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully!' });

    // res.status(200).json({ message: 'User route is working!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error!' });
  }
};

export { deleteUser };
