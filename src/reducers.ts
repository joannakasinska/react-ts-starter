import { Action } from './actions';
import { AppState } from './types';
import {
    APP_START_APPLICATION,
    APP_CHANGE_LOCALE,
    APP_CHANGE_SCREEN_DIMENSIONS,
} from './constants';

const initialState: AppState = {
    appState: '',
    locale: 'pl',
    screenDimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
};

export default (state = initialState, action: Action): AppState => {
    switch (action.type) {
        case APP_START_APPLICATION:
            return {
                ...state,
                ...{ appState: action.type },
            };
        case APP_CHANGE_LOCALE:
            return {
                ...state,
                ...{ locale: action.locale },
            };
        case APP_CHANGE_SCREEN_DIMENSIONS:
            return {
                ...state,
                ...{ screenDimensions: action.screenDimensions },
            };
        default:
            return state;
    }
};
