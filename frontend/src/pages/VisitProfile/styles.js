import styled from 'styled-components';

export const VisitContainer = styled.div`
  /* border-radius: 10px; */
  background: #fd0565;
  min-height: 100vh;
  /* margin: 40px 10px; */
  text-align: center;
  /* box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75); */
  img {
  }

  h3 {
    padding: 2px;
    color: white;
  }
  h4 {
    color: #ccc;
  }
  img {
    height: 85px;
    width: 85px;
    margin-bottom: 5px;
  }

  p {
    color: #ccc;
    color: white;
    padding: 3px;
    font-size: 0.9rem;
  }

  strong {
    color: #fffc00;
  }

  .footer {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  padding: 25px 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: center;
  background: #fd0565;

  h2 {
    color: white;
    font-weight: 100;
    line-height: 24px;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    margin: 10px 0;
    padding: 10px 15px 10px 15px;
  }
  .no-post {
    color: white;
    text-align: center;
    h2 {
      border: 0;
    }
  }
  .posts {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    text-align: left;
  }
`;
