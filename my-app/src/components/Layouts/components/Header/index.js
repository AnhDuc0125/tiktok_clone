import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok Logo" />
        </div>
        <div className={cx('search')}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className={cx('clear')}>
            <img src={images.times} alt="" />
          </button>
          <img className={cx('spinner')} src={images.loading} alt="" />
          <button className={cx('search-btn')}>
            <img src={images.search} alt="Search" />
          </button>
        </div>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
