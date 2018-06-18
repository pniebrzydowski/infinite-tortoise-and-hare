import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Home from './pages/Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </main>
                <footer />
            </div>
        );
    }
}

export default App;