import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import plLocaleData from 'react-intl/locale-data/pl';
import en from './locale/en';
import pl from './locale/pl';

addLocaleData([...plLocaleData, ...enLocaleData]);

export default {
    pl,
    en,
};
