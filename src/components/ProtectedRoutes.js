import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AccessDenied from './AccessDenied';

const ProtectedRoutes = ({ children, roles }) => {
  const location = useLocation();
  const { isSignedIn, userData } = useSelector((state) => state.token);

  const userHasRequiredRole = roles.includes(userData.role);

  if (!isSignedIn) {
    return (
      <Navigate to="/users/sign_in" state={{ from: location }} />
    );
  }

  if (isSignedIn && !userHasRequiredRole) {
    return (
      <AccessDenied role={userData.role} />
    );
  }

  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoutes;
