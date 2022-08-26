import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AcountItem.module.scss';
import { CheckIcon } from '~/components/Icons';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
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
    </Link>
  );
};

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
