import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './reducers/users';
import reservationReducer from './reducers/reservation';
import tokenReducer from './reducers/token';
import hometourReducer from './reducers/homepageTours';

const store = configureStore({
  reducer: {
    signedIn: usersReducer,
    reservation: reservationReducer,
    token: tokenReducer,
    home: hometourReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
