import { useState } from 'react';
import Draggable from 'react-draggable';

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDrag = (e, { x }) => {
    setSliderPosition(x);
  };

  return (
    <div className="product__slider">
      <div className="slider__wrapper">
        <Draggable
          axis="x"
          bounds={{ left: -sliderPosition, right: 0 }}
          onDrag={handleDrag}
        >
          <img
            src="https://res.cloudinary.com/deotmwbo8/image/upload/v1678026925/tentwenty/image_41_ohxngy.png"
            className="slider__item slider__item--left"
          />
        </Draggable>
        <Draggable
          axis="x"
          bounds={{ left: -sliderPosition, right: 0 }}
          onDrag={handleDrag}
        >
          <img
            src="https://res.cloudinary.com/deotmwbo8/image/upload/v1678026923/tentwenty/pexels-christian-diokno-3841338_1_mmdkbe.png"
            className="slider__item"
          />
        </Draggable>
        <Draggable
          axis="x"
          bounds={{ left: -sliderPosition, right: 0 }}
          onDrag={handleDrag}
        >
          <img
            src="https://res.cloudinary.com/deotmwbo8/image/upload/v1678026919/tentwenty/image_41_1_byf9n6.png"
            className="slider__item slider__item--right"
          />
        </Draggable>
      </div>
    </div>
  );
};

export default Slider;
