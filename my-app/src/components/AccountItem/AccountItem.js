import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AcountItem.module.scss';
import { Check } from '~/components/Icons';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} alt={data.nickname} />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          {data.nickname} <span className={cx('check')}>{data.tick && <Check></Check>}</span>
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
