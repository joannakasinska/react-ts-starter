import React from 'react';
import renderer from 'react-test-renderer';
import { createInjectedIntl } from '../../__tests__/mocks';
import { Home } from '../Home';

const props = {
    intl: createInjectedIntl(),
};

describe('Home:', () => {
    it('should render correctly and match snapshot', () => {
        const tree = renderer.create(<Home {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
