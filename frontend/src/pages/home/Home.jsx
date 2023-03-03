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
      <Featured id="featured" />
      <TrustedBy id="trustedBy" />
      <div className="category-card-section" id="slide1">
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map(card => (
            <CategoryCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
      <Features id="features" />
      <Business id="business" />
      <div className="project-card-section" id="slide2">
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
