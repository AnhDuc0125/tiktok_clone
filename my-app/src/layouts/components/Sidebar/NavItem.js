import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const NavItem = ({ to, title, icon, activedIcon }) => {
  return (
    // <NavLink to={to} className={cx('nav-item-wrapper')}>
    <NavLink to={to} className={({ isActive }) => cx('nav-item-wrapper', { active: isActive })}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('actived-icon')}>{activedIcon}</span>
      <span className={cx('nav-item-title')}>{title}</span>
    </NavLink>
  );
};

export default NavItem;
