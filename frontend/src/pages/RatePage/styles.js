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
    box-shadow: 1px 1px 4px 16px rgba(0.8, 0, 0 ,0);
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

export const Comments = styled.div`
    border-top: 1px solid #c56cf0;
    margin: 15px 0;
    max-width: 960px;

`