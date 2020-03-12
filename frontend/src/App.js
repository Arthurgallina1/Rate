import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes/index';
import store from './store';
import history from './utils/history';
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
             </Router>
        </Provider>
    )
}

export default App;
