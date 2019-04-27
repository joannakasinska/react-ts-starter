import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { homeRoutes } from '../Home';

export default () => {
    return <BrowserRouter>{homeRoutes()}</BrowserRouter>;
};
