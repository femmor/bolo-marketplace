import { Link } from 'react-router-dom';

import './CategoryCard.scss';

const CategoryCard = ({ card }) => {
  const { title, img, desc } = card;

  return (
    <Link to={`/gigs?category=design`}>
      <div className="category-card">
        <img src={img} alt={title} />
        <span className="desc">{desc}</span>
        <span className="title">{title}</span>
      </div>
    </Link>
  );
};
export default CategoryCard;
