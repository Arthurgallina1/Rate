import styled from 'styled-components';


export const RatingDiv = styled.div` 

    padding-top: 15px;
    border-top: 1px solid #c56cf0;

    input {
        width: 100%;
    }
    button {
        border: 0;
        background: #fd0565;
        color: #fff200;
        padding: 8px;
        margin: 8px 0 4px 0;
        font-weight: bold;
        border-radius: 5px;
        width: 100%;
        transition: 1s ease-in-out;
        &:hover {
            background-color: #fff200;
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