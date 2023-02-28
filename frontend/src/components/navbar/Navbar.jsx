import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
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
          <Link to="/for-business">
            <span>Bolo for Business</span>
          </Link>

          <Link to="/#">
            <span>Explore</span>
          </Link>

          <Link to="/#">
            <span>English</span>
          </Link>

          <Link to="/login">
            <span>Sign In</span>
          </Link>

          {!currentUser?.isSeller && (
            <Link to="/#">
              <span className="become-a-seller">Become a Seller</span>
            </Link>
          )}

          {!currentUser && (
            <Link to="/join">
              <button className={active ? 'join active' : 'join'}>Join</button>
            </Link>
          )}

          {currentUser && (
            <div className="user">
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/men/50.jpg"
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
                    <Link to="/" onClick={() => console.log('logout')}>
                      <span>Logout</span>
                    </Link>
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
