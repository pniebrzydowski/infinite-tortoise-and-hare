import React, { Component } from 'react';
import { Provider } from 'react-redux';
import history from '../routing/history';
import { ConnectedRouter } from 'connected-react-router';
import appStore from '../store/configureStore';
import App from './App';

class Root extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}


export default Root;