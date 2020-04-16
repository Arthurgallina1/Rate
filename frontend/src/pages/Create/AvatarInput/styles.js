import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 100px;
      width: 100px;
      border: 6px solid #15202b;
      border-radius: 50%;
      background: #15202b;
    }

    input {
      display: none;
    }
  }
`;
