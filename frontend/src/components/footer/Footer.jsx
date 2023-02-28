import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h4>Categories</h4>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h4>About</h4>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h4>Support</h4>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Bolo</span>
            <span>Buying on Bolo</span>
          </div>
          <div className="item">
            <h4>Community</h4>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h4>More From Bolo</h4>
            <span>Bolo Business</span>
            <span>Bolo Pro</span>
            <span>Bolo Logo Maker</span>
            <span>Bolo Guides</span>
            <span>Get Inspired</span>
            <span>Bolo Select</span>
            <span>ClearVoice</span>
            <span>Bolo Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h3>bolo</h3>
            <small>Copyright &copy; Bolo International Ltd. {year}</small>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
