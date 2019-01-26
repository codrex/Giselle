import React from 'react';
import propTypes from 'prop-types';
import './image-avatar.scss';

function ImageAvatar(props) {
  const {
    url, className, altText, size,
  } = props;
  return (
    <div className={`image-avatar image-avatar--${size} ${className}`}>
      {url && <img src={url} alt={altText} />}
    </div>
  );
}

ImageAvatar.propTypes = {
  url: propTypes.string,
  altText: propTypes.string,
  className: propTypes.string,
  size: propTypes.oneOf(['lg', 'md', 'sm']),
};

ImageAvatar.defaultProps = {
  className: '',
  size: 'sm',
  url: '',
  altText: '',
};

export default ImageAvatar;
