import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid white;

  img {
    height: 60px;
    width: 50px;
    padding: 5px 5px;
    border: 0px;
    border-radius: 2px;
  }

  div {
    padding: 5px 10px;
  }

  p {
    line-height: 1.5;
    color: black;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #0366d6;
    }
  }
  a {
    color: #666;
    margin-bottom: 5px;

    &:hover {
      color: #0366d6;
    }
  }
  h5 {
    color: #777;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
    color: #777;
  }

  button {
    margin: 20px 15px;
    width: 140px;
    border: 1px solid #00ff37;
    height: 30px;
    color: white;
    font-weight: 600;
    background-color: #00ff37;
    opacity: 0.9;
    font-size: 9px;
  }
`;

export const RateBox = styled.div``;
