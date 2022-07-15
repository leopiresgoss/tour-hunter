import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));

    if (data) {
      dispatch(GET_USER_DATA(data));
      dispatch(CHANGE_USER_STATUS(true));
    }
  }, []);

  return (
    <div className="App">
      <TopNav btnColor="text-green" />
      <SideNav />

      <Routes>
        <Route path="/tours" element={<Homepage />} />
        <Route path="/users/sign_in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/reservation/new" element={<ReserveForm />} />
        <Route path="/tour/new" element={<AdminAddTour />} />
        <Route path="/tours/delete" element={<DeleteTour />} />
      </Routes>
    </div>
  );
}

export default App;
