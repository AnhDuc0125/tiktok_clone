import React from 'react';
import classNames from 'classnames/bind';

import styles from './AcountItem.module.scss';
import { CheckIcon } from '~/components/Icons';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <Image src={data.avatar} alt={data.nickname} />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          {data.nickname}{' '}
          <span className={cx('check')}>
            {data.tick && <CheckIcon></CheckIcon>}
          </span>
        </h4>
        <span className={cx('fullname')}>{data.full_name}</span>
      </div>
    </div>
  );
};

export default AccountItem;
