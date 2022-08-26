import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <span className={cx('content')}>{children}</span>
      {afterIcon && <span className={cx('after-icon')}>{afterIcon}</span>}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  secondaryColor: PropTypes.bool,
  filled: PropTypes.bool,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  full: PropTypes.bool,
  beforeIcon: PropTypes.node,
  afterIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
