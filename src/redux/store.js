import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './reducers/users';
import reservationReducer from './reducers/reservation';
import tokenReducer from './reducers/token';
import toursReducer from './reducers/tours';
import hometourReducer from './reducers/homepageTours';
import tourReducer from './reducers/tour';
import myReservationReducer from './reducers/myReservation';

const store = configureStore({
  reducer: {
    signedIn: usersReducer,
    reservation: reservationReducer,
    token: tokenReducer,
    tours: toursReducer,
    home: hometourReducer,
    tour: tourReducer,
    myReservations: myReservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
