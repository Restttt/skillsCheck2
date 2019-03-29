import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import Store from './components/Store/Store';


export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/store" component={Store} />
        </Switch>
    </HashRouter>
);
    
