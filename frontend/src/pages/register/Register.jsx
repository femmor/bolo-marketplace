import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.scss';
import newRequest from '../../utils/newRequest';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.password ||
      !formData.email ||
      !formData.phone
    ) {
      setError('Please fill in all fields');
      error && toast.error(error);
      return;
    }

    try {
      // Send data to backend
      // if (data.error) {
      //   setError(data.error);
      //   error && toast.error(error);
      //   return;
      // }
      // If login success
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
      toast.error(error);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
