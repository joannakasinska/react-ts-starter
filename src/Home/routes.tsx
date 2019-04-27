import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedHome } from './Home';

export default () => {
    return (
        <Switch>
            <Route exact path={'/'} component={ConnectedHome} />
        </Switch>
    );
};
