import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../rootReducer';

export default function configureStore() {
    const middleware = [thunk, logger];

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}
