import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const { img, pp, cat, username } = project;

  return (
    <Link to="/">
      <div className="project-card">
        <img src={img} alt="" />
        <div className="info">
          <img src={pp} alt="" />
          <div className="texts">
            <h3>{cat}</h3>
            <span>{username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
