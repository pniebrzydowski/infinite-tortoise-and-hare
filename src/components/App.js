import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';

class App extends React.Component {
    render() {
        return (
            <div>
                <header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/admin" component={Admin} />
                    </Switch>
                </main>
                <footer />
            </div>
        );
    }
}

export default App;