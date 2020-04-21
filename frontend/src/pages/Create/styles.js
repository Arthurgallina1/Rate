import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 860px;
  margin: 15px auto;

  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */

  @media (max-width: 600px) {
    max-width: 400px;
    input {
      margin: 10px;
    }
  }

  Form {
    display: flex;
    flex-direction: column;

    Input,
    select,
    textarea {
      background: #24323f;
      border: 0;
      border-bottom-color: currentcolor;
      border-bottom-style: none;
      border-bottom-width: 0px;
      border-radius: 4px 4px 2px 2px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
      height: 44px;
      padding: 5px;
      color: white;
      font-weight: 900;
      margin: 0 0 30px;
    }

    label {
      font-weight: bold;
    }
    textarea {
      height: 180px;
    }

    /* textarea {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      width: 100%;
      border: 0;
      border-radius: 5px;
      margin: 0 0 20px 0;
      height: 180px;
    }

    select {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      width: 100%;
      border: 0;
      border-radius: 5px;
      margin: 0 0 20px 0;
    } */

    button {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      width: 100%;
      border: 0;
      /* margin: 10px; */
      border-radius: 5px;
      transition: all 0.3s ease;
      font-weight: bold;
      line-height: 16px;

      &:hover {
        background: ${lighten(0.1, '#000000')};
      }
    }

    label {
      cursor: pointer;
      display: flex;
      justify-content: center;
      img {
        height: 140;
        width: 240px;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee;

        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      input {
        display: none;
      }
    }
  }
`;
