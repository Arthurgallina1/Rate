import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';
//adiciona extra css baseado em alguma info
export const Container = styled.div`
    position: relative;
`

export const Badge = styled.button`
    background: none;
    border: 0;
    position: relative;

    ${props => props.hasUnread && css`
        &::before {
            position: absolute;
            right: 0;
            top: 0;
            width: 8px;
            height: 8px;
            background: #0366d6;
            content: '';
            border-radius: 50%;
            
        }
    
    `}
`

export const NotificationList = styled.div`
    position: absolute;
    width: 280px;
    left: calc(50% - 140px);
    top: calc(100% + 30px);
    background: rgba(255,255,255, 0.80);
    border-radius: 4px;
    padding: 15px 5px;
    z-index: 10;
    display: ${props => props.visible ? 'block' : 'none'};

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 20px);
        top: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid rgba(255,255,255, 0.80);
    }

`


export const Notifications = styled.div `
    color: #333;
    margin: 3px;

    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(0,0,0, 0.4);
    }

    p {
        font-size: 13px;
        line-height: 18px;
    }

    time {
        font-size: 12px;
        opacity: 0.8;
    }

    button { 
        font-size: 12px;
        border: 0;
        background: none;
        padding: 3px 0;
        color: ${lighten(0.2, '#333')};
        
    }

    ${props => 
    props.unread &&
    css `
        &::after { 
            content: '';
            display: inline-block;
            margin-left: 100px;
            width: 6px;
            height: 6px;
            background: #333;
            border-radius: 50%;
        }
    `}

`


export const Scroll = styled(PerfectScrollbar)`
    max-height: 280px;
        padding: 5px 15px;

`
