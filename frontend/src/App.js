import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes/index';
import { store, persistor } from './store';
import history from './utils/history';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                    <ToastContainer autoClose={1800} />
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default App;
