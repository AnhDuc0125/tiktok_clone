import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children,
  className,
  to,
  href,
  disabled = false,
  secondaryColor = false,
  filled = false,
  outline = false,
  round = false,
  small = false,
  medium = false,
  large = false,
  full,
  beforeIcon,
  afterIcon,
  onClick,
  ...props
}) => {
  let Component = 'button';

  const _props = {
    onClick,
    ...props,
  };

  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    Component = 'a';
  }

  const passClassName = cx(
    'wrapper',
    { small, medium, large, full },
    { filled, outline },
    { round },
    { secondaryColor },
    { disabled },
    { [className]: className }
  );

  return (
    <Component className={passClassName} {..._props}>
      {beforeIcon && <span className={cx('before-icon')}>{beforeIcon}</span>}
      <span>{children}</span>
      {afterIcon && <span className={cx('after-icon')}>{afterIcon}</span>}
    </Component>
  );
};

export default Button;
