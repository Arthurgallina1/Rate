import styled from 'styled-components';

export const Container = styled.div`
  /* background:#2f4858; */
  background: #111;
  padding: 0 30px;

  @media (max-width: 600px) {
    font-size: 9px;
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      color: #fff;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;
  svg {
    margin: 5px 10px;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 8px;
      color: #fff;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
