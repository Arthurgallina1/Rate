import styled from 'styled-components';
import { darken } from 'polished';

const handleColorType = (color) => {
  switch (color) {
    case 1:
      return '#FFFC00';
    case 2:
      return '#00ff37';
    case 0:
      return '#009dff';
    default:
      return '#fff';
  }
};

export const MainFeedBox = styled.div`
  width: 100%;
  text-align: left;
  /* min-width: 860px; */
  color: black;
  display: flex;
  padding: 10px;
  /* flex: 1; */
  /* border-bottom: 1px solid #ccc; */
  background-color: ${(props) => handleColorType(props.color)};
  &:hover {
    background-color: ${(props) =>
      darken('0.05', handleColorType(props.color))};
  }

  svg {
    margin-left: 55px;
    /* border: 1px solid #fd0565;
     */
    border-radius: 50%;
    border: 1px solid transparent;
    animation: pulse 1.5s reverse infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(253, 5, 101, 0.9);
    }

    0% {
      box-shadow: 0 0 0 20px rgba(253, 5, 101, 0.4);
    }
  }

  img {
    height: 60px;
    width: 50px;
    padding: 5px 5px;
    border: 0px;
    border-radius: 2px;
  }

  div {
    padding: 5px 10px;
    flex: 2;
  }

  p {
    color: #db1616;
    font-weight: bolder;
    font-size: 14px;
  }
  a {
    color: #666;
    margin-bottom: 5px;

    &:hover {
      color: #0366d6;
    }
  }
  h3 {
    color: black;
    font-weight: bold;
  }
  h5 {
    color: #777;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  span {
    color: #db1616;
    font-weight: bolder;
    font-size: 14px;
  }

  big {
    margin: 15px 25px 5px 0;
    font-weight: bold;
    color: #db1616;
  }

  img {
    margin-right: 10px;
    transition: all 1s linear;
    &:hover {
      rotate: 10deg;
    }
  }

  button {
    margin: 20px 15px;
    width: 140px;
    height: 30px;
    color: #24292e;
    font-weight: 600;
    background-color: #eff3f6;
    font-size: 9px;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  }

  @media (max-width: 600px) {
    font-size: 11px;
    margin: 0 0;
    padding: 5px;

    img {
      height: 40px !important;
      width: 40px !important;
    }
  }
`;

export const Cont = styled.div``;
