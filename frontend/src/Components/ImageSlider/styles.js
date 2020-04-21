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
    svg {
      path: black;
    }
  }

`;

const inactiveStyles = `
    // display: none; 
    opacity: 0;
    z-index: 1;   
    // margin-left: 100px;
    span{ 
        display: none;
    }
`;

export const SliderCont = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
`;

export const Slider = styled.div`
  position: absolute;
  transition: all 0.5s linear;
  width: 100%;
  margin-bottom: 10px;

  .slider-div {
    width: 100%;
    flex: 1;
    font-size: 34px;
    color: #ccc;
    text-align: center;
    margin-bottom: 15px;

    small {
      padding: 0 5px;
    }
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
