import React from 'react';
import propTypes from 'prop-types';
import ImageAvatar from '../ImageAvatar';
import './header.scss';

function Header(props) {
  const { name, url } = props;
  return (
    <header className="header">
      <div className="header__avatar-wrapper">
        <p>{name}</p>
        <ImageAvatar url={url} altText={name} />
      </div>
    </header>
  );
}

Header.propTypes = {
  name: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default Header;
