import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AdminAddTour from '../pages/AdminAddTour';
import store from '../redux/store';

describe('Test Admin Add Tour', () => {
  it('should render the page', () => {
    const element = (
      <Provider store={store}>
        <AdminAddTour />
      </Provider>
    );
    const adminAddTour = renderer.create(element);
    expect(adminAddTour).toMatchSnapshot();
  });
});
