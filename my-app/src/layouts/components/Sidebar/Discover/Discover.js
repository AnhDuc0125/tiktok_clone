import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

const Discover = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>Discover</p>
      <div className={cx('discover-content')}>{children}</div>
    </div>
  );
};

Discover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Discover;
