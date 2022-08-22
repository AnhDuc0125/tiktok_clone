import React from 'react';
import classNames from 'classnames/bind';

import styles from './AcountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          F8 official{' '}
          <span className={cx('check')}>
            <img src={images.check} alt="" />
          </span>
        </h4>
        <span className={cx('fullname')}>Vũ Văn A</span>
      </div>
    </div>
  );
};

export default AccountItem;
