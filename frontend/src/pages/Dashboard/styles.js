import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
    width: 960px;
    margin: 15px auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        background: #24292e;
        color: white;
        border: 0;
        padding: 10px;
        font-weight: bold;
        margin: 15px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover {
            background: ${lighten(0.3, '#24292e')}
        }
    }
    
    

`