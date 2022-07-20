import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import DeleteTour from '../pages/DeleteTour';

describe('Test Admin Delete Tour', () => {
  it('should render the page', () => {
    const element = (
      <Provider store={store}>
        <DeleteTour />
      </Provider>
    );
    const deleteTour = renderer.create(element);
    expect(deleteTour).toMatchSnapshot();
  });
});
