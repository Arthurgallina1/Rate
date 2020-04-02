import styled from 'styled-components';
import { darken } from 'polished'

export const Wrapper = styled.div`

    height: 100vh;
    /* background: linear-gradient(-90deg, #00631b, #32a852); */
    background: #fd0565;
    /* align-items: center; */
`

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    margin: 0 auto;
    padding: 100px 0 0 0;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        
        input {
            /* background: rgba(0,0,0, 0.7); */
            background: transparent;
            border: 0;
            border-bottom: 1px solid #FFF;
            /* border-radius: 4px; */
            height: 44px;
            padding: 0 15px;
            color: #FFF;
            margin: 0 0 10px;
            transition: all 1.5s linear 1s;
            &::placeholder {
                color: #FFF;
            }
            &:focus {
                border: 1px solid #FFF;
                border-radius: 4px;
            }
        }

        span {
            color: #FB6F91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 15px 0 0;
            height: 44px;
            background: ${darken(0.15, '#009dff')};
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.4s;

            &:hover {
                background: ${darken(0.20, '#009dff')}
            }
            > div {
            margin: 0 auto;
        }
            
        }


        a {
            color: #FFF;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }


`
