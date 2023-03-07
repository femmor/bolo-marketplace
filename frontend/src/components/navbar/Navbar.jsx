import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout');
      localStorage.removeItem('currentUser');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <Link to="/" className="logo">
          <span className="text">bolo</span>
          <span className="dot">.</span>
        </Link>
        <div className="links">
          <Link to="/#">
            <span>Bolo for Business</span>
          </Link>

          <Link to="/#">
            <span>Explore</span>
          </Link>

          <Link to="/#">
            <span>English</span>
          </Link>

          {!currentUser?.isSeller && (
            <Link to="/#">
              <span className="become-a-seller">Become a Seller</span>
            </Link>
          )}

          {
            // If user is not logged in, show sign in link
            !currentUser && (
              <Link to="/login">
                <span>Sign In</span>
              </Link>
            )
          }

          {!currentUser && (
            <Link to="/register">
              <button
                className={active || pathname !== '/' ? 'join active' : 'join'}
              >
                Join
              </button>
            </Link>
          )}

          {currentUser && (
            <div className="user">
              <img
                className="avatar"
                src={currentUser?.img || '/images/no-image.jpeg'}
                alt="user-photo"
              />
              <span
                className="username"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {currentUser.username}
              </span>
              {open && (
                <div className="user-menu">
                  <div className="sub-menu" onMouseLeave={() => setOpen(!open)}>
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/gigs">
                          <span>Gigs</span>
                        </Link>
                        <Link to="/add">
                          <span>Add New Gig</span>
                        </Link>
                      </>
                    )}
                    <Link to="/orders">
                      <span>Orders</span>
                    </Link>
                    <Link to="/messages">
                      <span>Messages</span>
                    </Link>
                    {currentUser && (
                      <Link to="/" onClick={handleLogout}>
                        <span>Logout</span>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          width: '1400px',
        }}
      >
        {active || (pathname !== '/' && <hr />)}
      </div>
      <div className={active || pathname !== '/' ? 'menu active' : 'menu'}>
        <Link className="menuLink" to="/">
          Graphics & Design
        </Link>
        <Link className="menuLink" to="/">
          Video & Animation
        </Link>
        <Link className="menuLink" to="/">
          Writing & Translation
        </Link>
        <Link className="menuLink" to="/">
          AI & Data Science
        </Link>
        <Link className="menuLink" to="/">
          Digital Marketing
        </Link>
        <Link className="menuLink" to="/">
          Music & Audio
        </Link>
        <Link className="menuLink" to="/">
          Programming & Tech
        </Link>
        <Link className="menuLink" to="/">
          Business
        </Link>
        <Link className="menuLink" to="/">
          Lifestyle
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
