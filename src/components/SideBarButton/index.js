import React from 'react';
import propTypes from 'prop-types';
import './button.scss';

function SideBarButton(props) {
  const { handleClick, isOpen = true, className } = props;
  const openClass = isOpen ? 'btn--open' : '';
  return (
    <button type="button" className={`btn ${openClass} ${className}`} onClick={handleClick}>
      <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Artboard" transform="translate(-81.000000, -80.000000)" fill="#FFFFFF">
            <g id="Sidebar" transform="translate(-1.000000, -1.000000)">
              <g id="Arrow" transform="translate(48.000000, 47.000000)">
                <polygon points="34.00725 47.914236 58.259144 47.914236 47.158484 36.83146 49.98011 34.00011 65.99343 49.987318 63.173028 52.818634 63.150384 52.797112 50.062424 65.999516 47.241818 63.168438 58.39273 51.918688 34.00725 51.918688" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
}

SideBarButton.propTypes = {
  handleClick: propTypes.func,
  isOpen: propTypes.bool,
  className: propTypes.string,
};

SideBarButton.defaultProps = {
  handleClick: () => {},
  isOpen: false,
  className: '',
};
export default SideBarButton;
