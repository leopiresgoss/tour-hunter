import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import store from '../redux/store';
import ReserveForm from '../pages/ReserveForm';
import DropDown from '../components/DropDown';

const packageOptions = [
  { id: 1, item: 'Standard' },
  { id: 2, item: 'VIP' },
  { id: 3, item: 'Luxury' },
];

it('Reserve Form renders correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <Router>
          <ReserveForm />
          <DropDown options={packageOptions} dropDownId="package" />
        </Router>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
