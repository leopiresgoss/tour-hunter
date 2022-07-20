import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import MyReservations from '../pages/MyReservations';

describe('Reservations snapshot test', () => {
  it('should render the page', () => {
    const element = (
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );
    const reservations = renderer.create(element);
    expect(reservations).toMatchSnapshot();
  });
});
