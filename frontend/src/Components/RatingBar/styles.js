import styled from 'styled-components';


export const RatingDiv = styled.div` 
    
    input {
        width: 100%;
    }
    button {
        border: 0;
        background: #fff;
        color: #000;
        padding: 8px;
        margin: 10px 0;
        font-weight: bold;
        border-radius: 5px;
        width: 100%;
        &:hover {
            background: #333;
        }

    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    span {
        margin: 5px 0;
    }

`