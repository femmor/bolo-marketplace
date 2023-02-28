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
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CategoryCard key={card.id} card={card} />
        ))}
      </Slide>
      <Features />
      <Business />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slide>
    </div>
  );
};
export default Home;
