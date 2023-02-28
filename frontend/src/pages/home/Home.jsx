import {
  Business,
  Featured,
  Features,
  Slide,
  TrustedBy,
} from '../../components';
import { cards, projects } from '../../data';
import { CategoryCard, ProjectCard } from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="category-card-section">
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map(card => (
            <CategoryCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
      <Features />
      <Business />
      <div className="project-card-section">
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Slide>
      </div>
    </div>
  );
};
export default Home;
