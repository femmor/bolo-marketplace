import './Featured.scss';

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span className="freelance">freelance</span>{' '}
            services for your business
          </h1>
          <div className="search">
            <div className="search-input">
              <img src="./images/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "Develop an e-commerce app"'
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="featured photo" />
          <span className="image-name">
            Bob. <b>Web Developer</b>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Featured;
