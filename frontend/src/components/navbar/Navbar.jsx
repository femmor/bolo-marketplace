import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <span className="text">bolo</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link to="/for-business">
            <span>Bolo for Business</span>
          </Link>

          <Link to="/explore">
            <span>Explore</span>
          </Link>

          <Link to="/english">
            <span>English</span>
          </Link>

          <Link to="/sign-in">
            <span>Sign In</span>
          </Link>

          {!currentUser?.isSeller && (
            <Link to="/become-a-seller">
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
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {currentUser.username}
              </span>
              {open && (
                <div className="user-menu">
                  <div className="sub-menu">
                    {currentUser?.isSeller && (
                      <>
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
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

      {active && <hr />}
      <div className={active ? 'menu active' : 'menu'}>
        <span>Test</span>
        <span>Test</span>
      </div>
    </header>
  );
};
export default Navbar;
