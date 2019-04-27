import React, { Component } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import debounce from 'lodash/debounce';
import { configureStore } from './store';
import * as translations from './i18n';
import { ReduxState } from './rootReducer/types';
import {
    startApplication,
    changeScreenDimensions,
    changeLocale,
} from './actions';
import Router from './Router';
import './styles/app.scss';

class App extends Component {
    private readonly store: Store<ReduxState>;

    constructor(props: any) {
        super(props);

        this.store = configureStore();
        this.store.dispatch(startApplication());
        this.store.dispatch(changeLocale());
        this.saveScreenDimensions = debounce(
            this.saveScreenDimensions,
            250
        ).bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.saveScreenDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.saveScreenDimensions);
    }

    saveScreenDimensions() {
        const { innerWidth, innerHeight } = window;

        this.store.dispatch(
            changeScreenDimensions({
                width: innerWidth,
                height: innerHeight,
            })
        );
    }

    render() {
        const locale = this.store.getState().app.locale;

        return (
            <Provider store={this.store}>
                <IntlProvider
                    locale={locale}
                    messages={translations.default[locale].messages}
                >
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('root') as HTMLElement);
