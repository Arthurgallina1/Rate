import styled from 'styled-components';
import { darken } from 'polished';

export const ProfileContainer = styled.div`
  min-height: 100%;
  background: rgb(25, 39, 52);
`;

export const Container = styled.div`
    
    max-width: 1000px;
    margin: 50px;
    display: flex;
 
    
    aside {
        /* flex-grow: 1; */
        min-width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        border-radius: 6px;
        padding: 15px 15px 25px 15px;
        /* box-shadow: 0px 6px 5px 1px rgba(0,0,0,0.75); */

    }

    div {
        flex-grow: 2;
    }

    img {
        width: 200px;
        height: 175px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    h3 {
        color: white;
        align-self: start;
        padding: 5px 0 0 0;

    }
    h4 {
        align-self: start;
        color: #ccc;
        padding: 0 0 10px 0;
        font-size: 12px;
    }

    button {
        width: 200px;
        
        border: 1px solid #ccc;
        color: black;
        height: 38px;
        background: white;
        font-weight: bold;
        border-radius: 3px;
        font-size: 12px;
        margin-bottom: 8px;

        &:hover {
            background: opacity(0.8);
        }
    }

    @media (max-width: 651px ) {

        flex-direction: column;
        padding-bottom: 50px;
        margin: 0;
        font-size: 12px;
        button {
            background: transparent;
            border: 2px solid rgb(29,161,242);
            color: #ccc;
            &:hover {
                background: rgb(29,161,242);

            }
        }
        aside { 
            padding: 15px 0;
            justify-content: center;
            text-align: center; 
            margin-bottom: 25px;
            background: transparent;
            border-radius: 0;
            padding: 15px 15px 25px 15px;
            box-shadow: none;
            p {
                font-size: 12px;
                color: #ccc;
            } 
            h3 {
                align-self: center;
            }
            h4 {
                align-self: center;
            }
            span {
                align-self: center;
                color: #ccc;
            }
        }

        img {
            width: 100px;
            height: 75px;

        }
    }
    
    /*    
            button {
                width: 100%;
                margin: 15px 0 0;
                height: 44px;
                background: #ccc;
                font-weight: bold;
                color: #222;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                transition: background 0.2s;

                &:hover {
                    background: ${darken(0.1, '#ccc')};
                }
            } */
`;

export const Box = styled.div`
  max-width: 200px;

  p {
    font-size: 13px;

    padding: 2px 2px 10px 2px;
    color: #ccc;
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

export const RightContainer = styled.div`
  background: #fff;
  border-radius: 6px;
  margin-left: 25px;
  box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.75);

  @media (max-width: 651px) {
    background: rgb(25, 39, 52);
    margin-left: 0px;
    border-radius: 0;
    margin-left: 0;
    box-shadow: none;
  }
`;
