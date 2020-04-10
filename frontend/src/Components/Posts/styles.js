import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  background: #0366d6;
  border-bottom: 1px solid #ccc;

  img {
    height: 60px;
    width: 50px;
    padding: 5px 5px;
    border-radius: 50%;
    border: 0px;
  }
  h3 {
    color: white;
  }
  h5 {
    color: #ccc;
  }
  div {
    padding: 5px 10px;
  }

  p {
    color: #db1616;
    line-height: 1.5;
    font-size: 12px;
    font-weight: bold;
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
    height: 30px;
    color: #24292e;
    font-weight: 600;
    background-color: #eff3f6;
    font-size: 9px;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  }
`;
