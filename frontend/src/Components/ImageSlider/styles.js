import styled, { css } from 'styled-components';

const activeStyles = `
z-index: 2;

span {
    font-size: 24px;
    font-weight: bold;
    opacity: 0.7;
    position: relative;
    top: -80px;
    right: 25px;

    &:hover {
        opacity: 1;
    }
  }
`;

const inactiveStyles = `
    // display: none; 
    opacity: 0.3;
    z-index: 1;   
    margin-left: 100px;
    span{ 
        display: none;
    }
`;

export const Slider = styled.div`
  position: absolute;
  transition: all 0.5s linear;
  width: 100%;
  margin-bottom: 10px;

  .slider-div {
    font-size: 20px;
    color: #ccc;
    text-align: center;
  }

  &:active {
    ${activeStyles}
  }
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : css`
          ${inactiveStyles}
        `}
`;
