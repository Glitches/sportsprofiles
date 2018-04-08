import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Players from './Players';
import Player from './Player';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Players} />
            <Route path='/:players' component={Player} />
        </Switch>
    </BrowserRouter>
);