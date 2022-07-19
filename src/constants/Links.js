const AdminLinks = [
  { id: 'Home', src: 'Home', path: '/tours' },
  { id: 'Reservation', src: 'Reservations', path: '/reservations' },
  { id: 'new-tour', src: ' New Tour', path: '/tour/new' },
  { id: 'delete', src: 'Delete Tour', path: '/tours/delete' },
];

const UserLinks = [
  { id: 'Home', src: 'Home', path: '/tours' },
  { id: 'Reservation', src: 'My Reservations', path: '/reservations' },
];

const GuestLinks = [
  { id: 'Home', src: 'Home', path: '/tours' },
  { id: 'signup', src: 'Sign up', path: '/signup' },
  { id: 'signin', src: 'Sign In', path: '/users/sign_in' },
];

export { AdminLinks, UserLinks, GuestLinks };
