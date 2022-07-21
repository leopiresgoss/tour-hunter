import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SignIn from '../pages/SignIn';

describe('Testing Components', () => {
  test('Render Header', () => {
    const signin = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(signin).toMatchSnapshot();
  });
});
