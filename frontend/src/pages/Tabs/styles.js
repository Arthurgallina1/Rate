import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .react-tabs__tab {
    flex: 1;
    border: 0;
    padding: 20px;
    background: rgb(25, 39, 52);
    font-weight: 500;
    color: #ccc;
  }

  .react-tabs__tab-list {
    /* border-bottom: 0.5px solid #ccc; */
    background: rgb(25, 39, 52);
    margin: 0;
  }

  .react-tabs__tab--selected {
    border-bottom: 2.5px solid rgb(29, 161, 242);
    color: white;
    font-weight: 600;

    @media (max-width: 651px) {
      .react-tabs__tab--selected {
        background: rgb(25, 39, 52) !important;
      }
    }
  }
`;
