import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { toast } from 'react-toastify';
import { FcImageFile } from 'react-icons/fc';

import { client } from 'filestack-react';

import './Register.scss';

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    phone: '',
    desc: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSeller = e => {
    setUser({
      ...user,
      isSeller: e.target.checked,
    });
  };

  const handleImagePicker = async () => {
    const imgStackOptions = {
      accept: 'image/*',
      maxFiles: 1,
      fromSources: [
        'local_file_system',
        'url',
        'imagesearch',
        'facebook',
        'instagram',
      ],
      uploadConfig: {
        tags: {
          fileName: file => 'bar' + file.name,
        },
      },
      transformations: {
        crop: {
          aspectRatio: 1,
        },
      },
      onUploadDone: file => {
        setFile(file.filesUploaded[0]);
        setUser({
          ...user,
          img: file.filesUploaded[0].url,
        });
      },
    };

    const imgStack = client.init(
      import.meta.env.VITE_FILESTACK_API_KEY,
      imgStackOptions
    );

    const picker = imgStack.picker(imgStackOptions);
    picker.open();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // send data to backend
    try {
      await newRequest.post('/auth/register', user);
      toast.success('Registered successfully');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>

          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter Username"
            value={user.username}
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email Address"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          <label htmlFor="">Profile Picture</label>
          <button
            type="button"
            className="image-upload-btn"
            onClick={() => handleImagePicker()}
          >
            {file !== null ? (
              <>
                <FcImageFile /> {file.filename}
              </>
            ) : (
              'Upload Image'
            )}
          </button>

          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Enter Country"
            value={user.country}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>

        <div className="right">
          <h1>I want to become a seller</h1>

          <div className="toggle">
            <label htmlFor="">Activate seller account</label>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleSeller}
                checked={user.isSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 8989"
            value={user.phone}
            onChange={handleChange}
          />

          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            cols="30"
            rows="10"
            value={user.desc}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
