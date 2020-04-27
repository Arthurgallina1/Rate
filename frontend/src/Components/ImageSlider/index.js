import React, { useState } from 'react';
import { Slider } from './styles';
import { FaRegCircle } from 'react-icons/fa';
import { GiPlainCircle } from 'react-icons/gi';
const default_props = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  pauseOnHover: true,
};

export default function ImageSlider({
  path,
  slideImages,
  properties = default_props,
}) {
  const [active, setActive] = useState(0);
  const [length, setLength] = useState(path.length);
  function handleClick() {
    active < length - 1 ? setActive(active + 1) : setActive(0);
  }

  return (
    <div className="container-image">
      {path.map((img, i) => {
        const act = i == active ? true : false;
        return (
          <Slider key={i} active={act}>
            <img src={img} alt="" />
            <div className="slider-div">
              {path.map((file, i) => (
                <small key={i} onClick={handleClick}>
                  <FaRegCircle size={12} color={'#ccc'} />
                </small>
              ))}
            </div>
            {/* <span onClick={handleClick}>{'<'}</span> */}
          </Slider>
        );
      })}
    </div>
  );
}
