import { Action } from 'redux';
import { Locale, ScreenDimensions } from './types';
import {
    APP_START_APPLICATION,
    APP_CHANGE_LOCALE,
    APP_CHANGE_SCREEN_DIMENSIONS,
} from './constants';

export type Action = StartApplication | ChangeLocale | ChangeScreenDimensions;

export interface StartApplication extends Action {
    type: typeof APP_START_APPLICATION;
}

export interface ChangeLocale extends Action {
    type: typeof APP_CHANGE_LOCALE;
    locale: Locale;
}

export interface ChangeScreenDimensions extends Action {
    type: typeof APP_CHANGE_SCREEN_DIMENSIONS;
    screenDimensions: ScreenDimensions;
}

export function startApplication(): StartApplication {
    return {
        type: APP_START_APPLICATION,
    };
}

export function changeLocale(locale: Locale = 'pl'): ChangeLocale {
    return {
        type: APP_CHANGE_LOCALE,
        locale,
    };
}

export function changeScreenDimensions(
    screenDimensions: ScreenDimensions
): ChangeScreenDimensions {
    return {
        type: APP_CHANGE_SCREEN_DIMENSIONS,
        screenDimensions,
    };
}
