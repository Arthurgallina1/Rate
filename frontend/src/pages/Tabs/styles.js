import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .react-tabs__tab {
    flex: 1;
    border: 0;
    padding: 20px;
    font-weight: 500;
    color: #666;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid #aaa;
  }

  .react-tabs__tab--selected {
    border-bottom: 2.5px solid #fd0565;
    font-weight: 600;
    color: #24292e;
    background: #fffc00;

    @media (max-width: 651px) {
      .react-tabs__tab--selected {
        background: #fffc00 !important;
      }
    }
  }
`;
