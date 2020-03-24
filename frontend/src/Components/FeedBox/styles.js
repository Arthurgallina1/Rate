import styled from 'styled-components';
import { darken } from 'polished';

const handleColorType = color => {
    switch (color) {
      case 1:
        return "#FFFC00";
      case 2:
        return "#00ff37";
      case 0:
        return "#009dff";
      default:
        return "#fff";
    }
  };

export const MainFeedBox = styled.div`
    width: 100%;
    min-width: 860px;
    color: black;
    display: flex;
    padding: 10px;
    /* border-bottom: 1px solid #ccc; */
    background-color: ${(props) => handleColorType(props.color)};
    &:hover {
        background-color: ${(props) => darken('0.05', handleColorType(props.color))};
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
        line-height: 1.5;
        font-size: 15px;
        font-weight: bold;
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
        margin-bottom: 5px;
    }
    span {
        font-size: 12px;
        color: #777;
    }

    big { 
        margin: 25px 0 5px 0;
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
        background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%); 
    }


`

export const Cont = styled.div` 

`