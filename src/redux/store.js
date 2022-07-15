import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './reducers/users';
import reservationReducer from './reducers/reservation';
import tokenReducer from './reducers/token';
import toursReducer from './reducers/tours';
import tourReducer from './reducers/tour';

const store = configureStore({
  reducer: {
    signedIn: usersReducer,
    reservation: reservationReducer,
    token: tokenReducer,
    tours: toursReducer,
    tour: tourReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
