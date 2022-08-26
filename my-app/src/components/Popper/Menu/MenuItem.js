import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  separate: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuItem;
