import { useState } from 'react';
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

export default Image;
