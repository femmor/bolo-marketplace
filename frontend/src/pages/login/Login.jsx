import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.scss';
import newRequest from '../../utils/newRequest';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      error && toast.error(error);
      return;
    }

    try {
      // Send data to backend
      const { data } = await newRequest.post('/auth/login', {
        username,
        password,
      });

      if (data.error) {
        setError(data.error);
        error && toast.error(error);
        return;
      }

      // If login success
      toast.success('Login success');
      localStorage.setItem('currentUser', JSON.stringify(data));
      navigate('/');

      setError('');
      setUsername('');
      setPassword('');
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
      toast.error(error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
