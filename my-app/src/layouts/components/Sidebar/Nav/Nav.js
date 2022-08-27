import classNames from 'classnames/bind';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = ({ children }) => {
  return <div className={cx('nav-wrapper')}>{children}</div>;
};

export default Nav;
