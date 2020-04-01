import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div `
    height: 100%;
    background: #fd0565;

   

`


export const PageContainer = styled.div`
    position: relative;
    top: 50px;
    background: white;
    background: #000;
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.75);
    border-radius: 5px;
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
  
    
    button {
        background: #000;
        color: white;
        height: 45px;
        border: 0;
        padding: 10px;
        font-weight: bold;
        margin: 15px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover {
        }
    }


    @media (max-width: 600px){
        max-width: 400px;
    }
`

export const Feed = styled.div`

   
`