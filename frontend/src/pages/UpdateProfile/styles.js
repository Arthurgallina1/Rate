import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerUpdate = styled.div`
  background: #0f161e;
  min-height: 100vh;
  padding-bottom: 50px;
`;
export const ContainerBg = styled.div`
  background: #0f161e;
  height: 150px;
`;

export const Container = styled.div`
  max-width: 600px;
  background: #15202b;
  /* margin: 50px auto; */
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center; */
  align-items: center;
  img {
    position: relative;
    top: -45px;
    height: 110px;
    width: 110px;
    border: 6px solid #15202b;
    border-radius: 50%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 80px;

    input,
    textarea {
      background: #192734;
      border: 0;
      border-radius: 4px 4px 2px 2px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
      height: 44px;
      padding: 5px;
      color: white;
      font-weight: 900;
      margin: 0 0 30px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.9);
      margin: 10px 0 20px;
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      background: rgb(29, 161, 242);
      border: 1px solid rgb(29, 161, 242);
      color: white;
      height: 30px;
      margin: 25px 0 0 0;
      padding: 4px 25px;
      border-radius: 9999px;
      width: 100%;
      font-size: 14px !important;

      &:hover {
        background: ${darken(0.1, 'rgb(29, 161, 242)')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    }
  }
  /* Only direct child from div (not form)  */
  > button {
    width: 100%;
    margin: 15px 0 0;
    height: 44px;
    background: #f94c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#F94C75')};
    }
  }
`;
