import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

sinon.createSandbox();

Enzyme.configure({
    adapter: new Adapter(),
});
