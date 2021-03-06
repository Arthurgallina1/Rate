import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  /* cc1616 */
  width: 100%;
  background: rgb(25, 39, 52);
  /* background: white; */
  height: 200vh;
`;
export const Slider = styled.div`
  height: 280px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  img {
    height: 280px;
    width: 100%;
    /* box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.75); */
  }
`;

export const Box = styled.div`
  /* border: 1px solid white; */
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
  /* padding: 0px 20px; */
  position: relative;
  top: 15px;
  color: white;
  background: rgb(25, 39, 52);
  /* background: gray; */
  /* box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.75); */
  /* border-radius: 5px; */

  @media (max-width: 600px) {
    /* max-width: 400px; */
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
  background: white;
  justify-content: center;

  .post-cont {
    width: 100%;
    padding: 0;
    background: rgb(25, 39, 52);
  }

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

  .lower-container {
    padding: 15px;
    margin-top: 50px;
    h2 {
      margin-top: 5px;
    }

    h5 {
      padding: 0;
      color: #aaa;
      font-weight: lighter;
    }
  }
`;

export const RatingDiv = styled.div`
  padding-top: 15px;
  /* border-top: 1px solid white; */

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
    color: white;
    font-weight: 600;
    width: 100%;
    background: ${lighten('0.05', '#192734')};
    border: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5) !important;
    border-radius: 5px 5px 0 0;
    height: 40px;
    padding: 5px;
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

export const UserBox = styled.div`
  display: flex;
  padding: 0px 15px 10px 15px;
  .info {
    margin-left: 3px;
  }
  img {
    height: 40px !important;
    width: 40px !important;
    border: 1px solid #eee;
    margin-right: 10px;
    border-radius: 50%;
  }
  h4 {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  span {
    color: #ccc;
  }
`;
