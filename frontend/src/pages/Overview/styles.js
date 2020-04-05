import styled from 'styled-components';

export const ContainerView = styled.div``;

export const Container = styled.div`
  padding: 20px;

  hr {
    border: 0;
    height: 1px;
    background: #333;
    margin: 0px 0px 10px 0px;
  }

  h3 {
    color: black;
    padding: 0 0 4px 0;
  }
  h4 {
    padding: 1px 0 2px 0;
  }

  strong {
    color: black;
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
