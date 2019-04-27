import { InjectedIntl, IntlProvider } from 'react-intl';
import translations from '../i18n';

export function createInjectedIntl(): InjectedIntl {
    const props = {
        locale: 'pl',
        messages: translations.pl.messages,
    };
    const intlProvider = new IntlProvider(props, {});

    return intlProvider.getChildContext().intl;
}
