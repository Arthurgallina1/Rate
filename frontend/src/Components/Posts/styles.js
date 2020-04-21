import styled from 'styled-components';

export const Box = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');
  display: flex;
  border-bottom: 1px solid white;
  padding: 8px 0 0 0;
  background: rgb(25, 39, 52);
  font-family: 'Zilla Slab', serif !important;

  .img-box {
    flex: 1;
    img {
      height: 50px !important;
      width: 50px !important;
      border: 1px solid white;
      border-radius: 50%;
    }
  }

  div {
    padding: 5px 10px;
  }

  .button-box {
    flex: 1;
    button {
      background: rgb(29, 161, 242);
      border: 1px solid rgb(29, 161, 242);
      color: white;
      height: 30px;
      padding: 0px 25px;
      border-radius: 9999px;
      width: 110px;
      font-size: 9px;
      margin: 0;

      &:hover {
        background: rgb(202, 32, 85);
        border: 1px solid rgb(202, 32, 85);
        color: white;
      }
    }
  }

  .follow-box-info {
    margin-left: 3px;
    padding: 5px;
    margin-bottom: 6px;
    flex: 5;
    display: flex;
    flex-flow: column wrap;
    color: white;

    p {
      font-size: 14px;
      line-height: 1.5;
      cursor: pointer;
      strong {
        color: white;
        &:hover {
          color: rgb(29, 161, 242);
        }
      }
      
    }
    h5 {
      color: #888;
    }
    span {
      color: white;
      font-size: 11px;
      color: #ff0000;
      font-weight: bold;
    }
  }


  }
  a {
    color: #666;
    margin-bottom: 5px;

    &:hover {
      color: #0366d6;
    }
  }
  h5 {
    color: #777;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
    color: #777;
  }

  button {
    margin: 20px 15px;
    width: 140px;
    border: 1px solid #00ff37;
    height: 30px;
    color: white;
    font-weight: 600;
    background-color: #00ff37;
    opacity: 0.9;
    font-size: 9px;
  }
`;

export const RateBox = styled.div``;
