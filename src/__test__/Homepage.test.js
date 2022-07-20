import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Homepage from '../pages/Homepage';

describe('Homepage snapshot test', () => {
  it('should render the page', () => {
    const element = (
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
    const homepage = renderer.create(element);
    expect(homepage).toMatchSnapshot();
  });
});
