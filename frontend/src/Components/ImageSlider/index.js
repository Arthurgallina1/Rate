import React, { useState } from 'react';
import { Slider } from './styles';
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
            <span onClick={handleClick}>{'<'}</span>
            <img src={img} alt="" />
          </Slider>
        );
      })}
    </div>
  );
}
