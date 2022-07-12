import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './reducers/users';
import reservationReducer from './reducers/reservation';

const store = configureStore({
  reducer: {
    signedIn: usersReducer,
    reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
