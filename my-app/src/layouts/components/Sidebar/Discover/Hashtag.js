import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import * as Icon from '~/components/Icons';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

const Hashtag = ({ music, title }) => {
  const DisplayIcon = music ? Icon.Music : Icon.Hashtag;
  return (
    <span className={cx('hashtag-wrapper')}>
      {<DisplayIcon className={cx('hashtag-icon')} />}
      <p className={cx('hashtag-title')}>{title}</p>
    </span>
  );
};

Hashtag.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Hashtag;
