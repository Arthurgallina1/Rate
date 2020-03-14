import styled from 'styled-components';


export const Container = styled.div`

    


`

export const Box = styled.div`

    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    
    img {
        height: 60px;
        width: 50px;
        padding: 5px 5px;
        border: 0px;
        border-radius: 2px;
    }

    div {
        padding: 5px 10px;
    }

    p {
        line-height: 1.5;
        font-size: 15px;
        font-weight: bold;
    }
    a {
        color: #666;
        margin-bottom: 5px;

        &:hover {
            color: #0366d6;
        }
    }
    
    span {
        font-size: 12px;
        color: #777;

    }

    button {
        margin: 20px 15px;
        width: 140px;
        height: 30px;
        color: #24292e;
        font-weight: 600;
        background-color: #eff3f6;
        font-size: 9px;
        background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%); 
    }

`