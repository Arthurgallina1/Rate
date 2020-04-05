import styled from 'styled-components';

export const Container = styled.div`
  /* cc1616 */
  width: 100%;
  background: #db1616;
  height: 200vh;
`;
export const Slider = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  /* justify-content: center; */

  img {
    height: 160px;
    width: 160px;
    box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.75);
  }
  .container-imager::before {
    content: '<';
    position: relative;
    left: -50px;
    top: -50px;
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;

export const Box = styled.div`
  /* border: 1px solid white; */
  max-width: 760px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  top: 25px;
  color: white;
  background: #db1616;
  /* box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.75); */
  /* border-radius: 5px; */

  @media (max-width: 600px) {
    max-width: 400px;
    font-size: 10px;

    p {
      font-size: 11px;
    }
  }

  h2 {
    color: white;
  }
  h3 {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    text-align: center;
    padding: 12px;
    color: white;
  }
  h5 {
    color: #eee;
    font-size: 0.8rem;
    padding: 5px;
    margin-bottom: 5px;
  }
  .icon-full {
    color: #db1616;
  }
  span {
    font-size: 10px;
  }
`;

export const UpperContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    border: 0;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    background: #db1616;
    color: #000;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.75);
    transition: all 0.3s linear;
    &:hover {
      color: white;
    }
  }
`;

export const RatingDiv = styled.div`
  padding-top: 15px;
  border-top: 1px solid white;

  input {
    width: 100%;
  }
  button {
    border: 0;
    background: #fd0565;
    color: #fffc00;
    padding: 8px;
    margin: 8px 0 4px 0;
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
    transition: 1s ease-in-out;
    &:hover {
      background-color: #fffc00;
      color: #fd0565;
    }
  }
  input {
    margin: 10px 0;
    color: #fd0565;
    height: 50px;
    &:focus {
      border: 2px solid #fd0565;
      border-radius: 3px;
    }
  }

  span {
    font-size: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Comments = styled.div`
  margin: 10px 0;
  max-width: 960px;
`;
