import './Slide.scss';

// import Carousel from 'better-react-carousel';
import Slider from 'infinite-react-carousel';

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
