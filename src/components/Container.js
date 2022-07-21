import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container relative mx-auto p-3 w-screen">{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
