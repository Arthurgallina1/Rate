import styled from 'styled-components';

export const ContainerView = styled.div``;

export const Container = styled.div`
  padding: 20px;

  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 0px 0px 10px 0px;
  }

  h3 {
    color: white;
    padding: 0 0 4px 0;
    border: 0;
  }
  h4 {
    padding: 1px 0 2px 0;

    strong {
      font-weight: 700;
      color: white;
    }
  }

  strong {
    color: white;
  }
`;

export const ProfileCont = styled.div`
  padding: 20px;
  box-shadow: none;
  h3 {
    align-self: center;
  }
  h4 {
    align-self: center;
    strong {
      font-weight: 700;
      color: white;
    }
  }

  img {
    height: 100px;
    width: 100px;
  }
`;

export const Box = styled.div`
  max-width: 200px;

  p {
    font-size: 13px;

    padding: 2px 2px 10px 2px;
    color: #333;
  }
  svg {
    margin-right: 7px;
  }

  /* span {
        display: flex;
        justify-content: flex-start;
        font-size: 12px;
                
    } */
`;
