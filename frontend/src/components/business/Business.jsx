import './Business.scss';

const Business = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="left">
          <h2>
            bolo
            <span className="highlight"> business </span>
          </h2>
          <h2>
            A business solution designed for
            <span className="highlight"> teams</span>
          </h2>
          <small>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </small>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> Connect to
              freelancers with proven business experience.
            </div>
          </div>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> Get matched with the
              perfect talent by a customer success manager.
            </div>
          </div>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> Manage teamwork and
              boost productivity with one powerful workspace.
            </div>
          </div>

          <button className="btn">Explore Bolo Business</button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt="business"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
