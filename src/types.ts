export type Locale = 'en' | 'pl';

export interface ScreenDimensions {
    width: number;
    height: number;
}

export interface AppState {
    appState: string;
    locale: Locale;
    screenDimensions: ScreenDimensions;
}
