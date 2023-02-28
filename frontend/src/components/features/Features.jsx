import './Features.scss';

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h2>
            A whole world of{' '}
            <span className="highlight">freelance talent </span>at your
            fingertips
          </h2>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> The best for every
              budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
          </div>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> Quality work done
              quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> Protected payments,
              every time.
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
          </div>
          <div className="item">
            <div className="title">
              <img src="./images/check.png" alt="check" /> 24/7 support.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
          </div>
        </div>
        <div className="right">
          <video src="./images/video.mp4" controls />
        </div>
      </div>
    </div>
  );
};

export default Features;
