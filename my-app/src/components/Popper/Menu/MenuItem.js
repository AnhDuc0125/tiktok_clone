import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

const MenuItem = ({ title, icon, separate, onClick }) => {
  const classes = cx('menu-item', {
    separate,
    'menu-text': !icon,
  });

  return (
    <Button full className={classes} beforeIcon={icon} onClick={onClick}>
      {title}
    </Button>
  );
};

export default MenuItem;
