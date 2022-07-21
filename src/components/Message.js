import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiInfo } from 'react-icons/ti';
import '../flash.css';

const Message = (props) => {
  const {
    duration, icon, message,
    title, type, color, position,
  } = props;

  const [showMessage, setShowMessage] = useState(true);

  document.addEventListener('click', () => {
    setShowMessage(false);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  }, []);

  return (
    showMessage && (
      <div className={`flash-message ${position}`}>
        <div className={`message-header header-${type}`}>
          <span className={`message-header-icon icon-${type}`}>
            {icon}
          </span>
          <span className={`message-header-title title-${type}`}>
            {title}
          </span>
        </div>
        <p className={`message-content message-${color}`}>
          {message}
        </p>
        <button
          type="button"
          className=" absolute top-1 right-1 outline-none border-none bg-transparent cursor-pointer"
          onClick={() => setShowMessage(false)}
        >
          <AiOutlineCloseCircle
            className="text-2xl text-gray-dark hover:text-reddish-300"
          />
        </button>

      </div>
    )
  );
};

Message.defaultProps = {
  position: 'absolute top-16 left-1/2 transform -translate-x-1/2',
  duration: 5000,
  icon: <TiInfo />,
  title: 'Information',
  type: 'info',
  color: 'black',

};

Message.propTypes = {

  duration: PropTypes.number,
  icon: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  position: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Message;
