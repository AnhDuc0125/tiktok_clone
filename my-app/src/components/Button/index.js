import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children,
  to,
  href,
  small = false,
  medium = false,
  large = false,
  ...props
}) => {
  let Component = 'button';

  const _props = {
    href,
    to,
    small,
    medium,
    large,
    ...props,
  };

  if (_props.to) {
    Component = Link;
  } else if (_props.href) {
    Component = 'a';
  }

  return (
    <Component className={cx('wrapper', { small, medium, large })} {..._props}>
      {children}
    </Component>
  );
};

export default Button;
