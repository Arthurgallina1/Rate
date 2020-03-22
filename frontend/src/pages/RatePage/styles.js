import styled from 'styled-components';


export const Container = styled.div `
/* cc1616 */
    width: 100%;
    background: #db1616;
    height: 200vh;
`

export const Box = styled.div `
    
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50px;
    background: #fff;
    box-shadow: 0px 6px 5px 1px rgba(0,0,0,0.75);
    border-radius: 5px;
    h2 {
        color: #344d79;
    }
    h5 { 
        color: #63478b;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
    .icon-full {
        color: #db1616;
    }
    span {
        font-size: 10px;
    }

`
export const RatingDiv = styled.div` 

    padding-top: 15px;
    border-top: 1px solid #c56cf0;

    input {
        width: 100%;
    }
    button {
        border: 0;
        background: #fd0565;
        color: #FFFC00;
        padding: 8px;
        margin: 8px 0 4px 0;
        font-weight: bold;
        border-radius: 5px;
        width: 100%;
        transition: 1s ease-in-out;
        &:hover {
            background-color: #FFFC00;
            color:#fd0565;
        }

    }
    input {
        margin: 10px 0;
        color: #fd0565;
        height: 50px;
        &:focus {
            border: 2px solid #fd0565;
            border-radius: 3px;
        }
    }

    span {
        font-size: 12px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
   
`

export const Comments = styled.div`
    border-top: 1px solid #c56cf0;
    margin: 15px 0;
    max-width: 960px;

`