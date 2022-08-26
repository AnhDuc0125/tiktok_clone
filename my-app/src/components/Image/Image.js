import { useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';

const Image = ({ src, alt = 'default alt', ...props }) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.defaultAvatar);
  };
  return (
    <img src={fallback || src} alt={alt} {...props} onError={handleError} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
