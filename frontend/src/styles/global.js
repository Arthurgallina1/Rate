import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css'; 
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Baloo Thambi 2', cursive;

    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        
    }

    body { 
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul { 
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`