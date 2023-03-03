import { Link } from 'react-router-dom';

import './GigCard.scss';

const GigCard = ({ gig }) => {
  const { img, pp, desc, price, star, username } = gig;

  return (
    <div className="gig-card">
      <Link to="/gig/123">
        <img src={img} alt="" />
        <div className="info">
          <div className="user">
            <img src={pp} alt="" />
            <span>{username}</span>
          </div>
          <p>{desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <span>{star}</span>
          </div>
        </div>
      </Link>
      <hr />
      <div className="details">
        <img src="./images/heart.png" alt="" />
        <div className="price">
          <span>STARTING AT</span>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
};
export default GigCard;
