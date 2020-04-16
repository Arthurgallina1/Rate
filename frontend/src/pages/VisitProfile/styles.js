import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerUpdate = styled.div`
  background: #15202b;
  min-height: 100vh;
  padding-bottom: 50px;
`;
export const ContainerBg = styled.div`
  background: #15202b;
  height: 150px;
`;

export const Container = styled.div`
  max-width: 600px;
  background: #15202b;
  /* margin: 50px auto; */
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center; */
  /* align-items: center; */
  .upper-box {
    flex: 1;
    align-self: stretch;
    img {
      position: relative;
      left: 5%;
      top: -45px;
      height: 110px;
      width: 110px;
      border: 6px solid #15202b;
      border-radius: 50%;
    }

    button {
      position: relative;
      right: -125px;
      top: -75px;
      background: transparent;
      border: 1px solid rgb(29, 161, 242);
      color: rgb(29, 161, 242);
      height: 35px;
      padding: 10px 25px;
      border-radius: 9999px;
      width: 110px;
      font-size: 10px;

      &:hover {
        background: rgb(29, 161, 242);
        color: white;
      }
    }
    .middle-box {
      position: relative;
      top: -45px;
      padding: 5px 25px;

      h3 {
        color: white;
      }

      h4 {
        color: #8899a6;
      }

      span {
        line-height: 1;
        color: white;
        font-size: 10px;
      }

      .lower-box {
        margin-top: 15px;
        color: #8899a6;
        font-size: 12px;
        strong {
          color: white;
        }
      }

      .posts {
        text-align: center;

        h3 {
          color: #1da1f2;
          strong {
            border-bottom: 2px solid #1da1f2;
            padding: 4px 20px;
          }
        }
      }
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

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 1;

    &:hover {
      opacity: 1;
    }
  }
`;
