import { Featured, TrustedBy } from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};
export default Home;
