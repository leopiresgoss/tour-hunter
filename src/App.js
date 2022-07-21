import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideNav from './components/SideNav';
import ReserveForm from './pages/ReserveForm';
import TopNav from './components/TopNav';
import MyReservations from './pages/MyReservations';
import Homepage from './pages/Homepage';
import AdminAddTour from './pages/AdminAddTour';
import TourDetails from './pages/TourDetails';
import DeleteTour from './pages/DeleteTour';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { GET_USER_DATA, CHANGE_USER_STATUS } from './redux/reducers/token';
import ProtectedRoutes from './components/ProtectedRoutes';
import Role from './constants/Role';
import PATH_URL from './constants/urlPaths';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));

    if (data) {
      dispatch(GET_USER_DATA(data));
      dispatch(CHANGE_USER_STATUS(true));
    }
  }, []);

  const regex = /^(0|[1-9]\d*)$/;

  const navColor = PATH_URL.filter((url) => {
    if (pathname === url.path) {
      return url;
    } if (pathname.split('/')[2]?.match(regex)) {
      return [{ color: 'text-green' }];
    }
    return null;
  });

  return (
    <div className="App">

      <TopNav btnColor={navColor[0].color} />

      <SideNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tours" element={<Homepage />} />
        <Route path="/users/sign_in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tour/:id" element={<TourDetails />} />

        <Route
          path="/reservations"
          element={
            <ProtectedRoutes roles={[Role.USER, Role.ADMIN]}><MyReservations /></ProtectedRoutes>
          }
        />

        <Route
          path="/reservation/new"
          element={(
            <ProtectedRoutes roles={[Role.USER, Role.ADMIN]}>
              <ReserveForm />
            </ProtectedRoutes>
          )}
        />
        <Route
          path="/tour/new"
          element={(
            <ProtectedRoutes roles={[Role.ADMIN]}>
              <AdminAddTour />
            </ProtectedRoutes>
          )}
        />
        <Route
          path="/tours/delete"
          element={(
            <ProtectedRoutes roles={[Role.ADMIN]}>
              <DeleteTour />
            </ProtectedRoutes>
           )}
        />
      </Routes>
    </div>
  );
}

export default App;
