import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';

Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe('Render Test', function () {
    it('case: handleConfirm action test', () => {
        rootStore.formStore.formName('name');
        rootStore.formStore.handleConfirm();
        expect(rootStore.formStore.localStorageValue[0].name).toEqual('name');
    });
});
