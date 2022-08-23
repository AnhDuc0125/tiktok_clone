import classNames from 'classnames/bind';
import * as Icon from '../../Icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuHeader = ({ heading, onBack }) => {
  return (
    <div className={cx('menu-header')}>
      <span className={cx('header-back')} onClick={onBack}>
        <Icon.BackIcon></Icon.BackIcon>
      </span>
      <h3 className={cx('header-title')}>{heading}</h3>
    </div>
  );
};

export default MenuHeader;
