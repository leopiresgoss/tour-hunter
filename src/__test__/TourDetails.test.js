import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TourDetails from '../pages/TourDetails';

describe('Details snapshot test', () => {
  test('Render correctly', () => {
    const signin = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <TourDetails />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(signin).toMatchSnapshot();
  });
});
