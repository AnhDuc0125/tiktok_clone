import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountsBlock.module.scss';

const cx = classNames.bind(styles);

const AccountsBlock = ({ children, label }) => {
  return (
    <div className={cx('block-wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('accounts-wrapper')}>{children}</div>
      <p className={cx('more')}>See all</p>
    </div>
  );
};

AccountsBlock.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default AccountsBlock;
