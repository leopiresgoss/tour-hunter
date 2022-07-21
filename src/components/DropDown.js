import PropTypes from 'prop-types';
import { useEffect } from 'react';

const DropDown = (props) => {
  const {
    dropDownId,
    dropDownName,
    options,
    handleChange,
  } = props;

  useEffect(() => {
    const dropdown = document.querySelector(`#${dropDownId}`);
    dropdown.classList.add('hidden');
  }, []);

  const chooseOption = (e, key) => {
    const dropdown = document.querySelector(`#${dropDownId}`);
    const button = document.querySelector(`#${dropDownId}-button`);
    dropdown.classList.add('hidden');
    button.textContent = e.target.textContent;

    handleChange(e, key);
  };

  const handleClick = () => {
    const dropdown = document.querySelector(`#${dropDownId}`);
    dropdown.classList.remove('hidden');
  };

  return (
    <div className="flex justify-center z-50">
      <div className="relative">
        <button
          className="dropdown-button"
          type="button"
          onClick={handleClick}
          id={`${dropDownId}-button`}
        >
          {dropDownName}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            />
          </svg>
        </button>
        <ul
          className="dropdown-items"
          aria-labelledby="dropdownMenuButton1"
          id={`${dropDownId}`}
        >
          {options.map((option) => (
            <li
              key={option.id}
              id={option.id}
              onClickCapture={(e) => chooseOption(e, option.id)}
              className="dropdown-list-item"
            >
              {option.item}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

DropDown.propTypes = {
  dropDownId: PropTypes.string.isRequired,
  dropDownName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DropDown;
