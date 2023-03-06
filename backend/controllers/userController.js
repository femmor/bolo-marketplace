import User from '../models/userModel.js';
import createError from '../utils/createError.js';

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    // If the token is valid and the user is the right user
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, 'User not found!'));
    }

    // check if user id is the same as the id in the token
    if (req.userId !== user._id.toString()) {
      return next(createError(403, 'You can delete only your account!'));
    }

    // Delete the user
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully!' });

    // res.status(200).json({ message: 'User route is working!' });
  } catch (error) {
    next(error);
  }
};

export { deleteUser };
