import styled from 'styled-components';
import { darken } from 'polished';

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
        box-shadow: 0px 6px 5px 1px rgba(0,0,0,0.75);

    }

    div {
        flex-grow: 2;
    }

    img {
        width: 200px;
        height: 175px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    h3 {
        color: #333;
        align-self: start;
        padding: 5px 0 0 0;

    }
    h4 {
        align-self: start;
        color: #666;
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
            background: ${darken(0.05, '#eee')}
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
        color: #333;
    }
    svg {
        margin-right: 7px;
    }

    span {
        display: flex;
        justify-content: flex-start;
        font-size: 12px;
                
    }
`

export const RightContainer = styled.div`
    background: #fff;
    border-radius: 6px;
    margin-left: 25px;
    box-shadow: 0px 6px 5px 1px rgba(0,0,0,0.75);

`


export const Tab = styled.div`



`