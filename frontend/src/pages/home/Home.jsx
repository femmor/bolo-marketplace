import {
  Business,
  Featured,
  Features,
  Slide,
  TrustedBy,
} from '../../components';
import { cards } from '../../data';
import { CategoryCard } from '../../components';
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
    </div>
  );
};
export default Home;
