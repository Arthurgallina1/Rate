import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      /* opacity: 0.7; */
      opacity: ${(props) => (props.canBeEditted ? '1' : '0.7')};
    }

    img {
      max-height: 150px;
      width: 100%;
    }
    svg {
    }

    input {
      display: none;
    }
  }
`;
