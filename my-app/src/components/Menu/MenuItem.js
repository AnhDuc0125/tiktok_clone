import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const MenuItem = ({ title, icon }) => {
  return (
    <Button full className={cx('menu-item')} beforeIcon={icon}>
      {title}
    </Button>
  );
};

export default MenuItem;
