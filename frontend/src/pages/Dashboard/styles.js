import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100%;
  /* background: #fd0565; */
  background: #192734;
`;

export const PageContainer = styled.div`
  /* position: relative; */
  /* top: 50px; */

  background: white;
  background: #192734;
  /* box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.75); */
  /* border-radius: 5px; */
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */
  /* justify-content: center; */
  h2 {
    margin: 0 auto;
    font-weight: 100;
    color: white;
    padding: 20px;
  }
  button {
    background: #0366d6;
    color: white;
    height: 45px;
    border: 0;
    padding: 12px 28px;
    font-weight: bold;
    margin: 15px;
    border-radius: 555px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${darken(0.1, '#0366d6')};
    }
  }

  @media (max-width: 600px) {
    /* max-width: 400px; */
    margin: 0 auto;
  }
`;

export const Feed = styled.div``;
