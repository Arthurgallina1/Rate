import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
    width: 960px;
    margin: 15px auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    Form {
        display: flex;
        flex-direction: column;

        Input {
            background: rgba(0,0,0, 0.8);
            color: white;
            padding: 10px;
            width: 450px;
            border: 0;
            border-radius: 5px;
            margin: 10px;
        }

        textarea {
            background: rgba(0,0,0, 0.8);
            color: white;
            padding: 10px;
            width: 450px;
            border: 0;
            border-radius: 5px;
            margin: 10px;
            height: 250px;
        }

        select {
            background: rgba(0,0,0, 0.8);
            color: white;
            padding: 10px;
            width: 450px;
            border: 0;
            margin: 10px;
            border-radius: 5px;
        }

        button {
            background: rgba(0,0,0, 0.8);
            color: white;
            padding: 10px;
            width: 450px;
            border: 0;
            margin: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
            font-weight: bold;
            line-height: 16px;

            &:hover {
                background: ${lighten(0.1, '#000000')}
            }
        }

    }

    
`