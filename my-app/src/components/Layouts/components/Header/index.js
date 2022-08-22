import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setResultSearch([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok Logo" />
        </div>
        <div>
          <Tippy
            interactive
            visible={resultSearch.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <p className={cx('search-title')}>Accounts</p>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                </PopperWrapper>
              </div>
            )}
          >
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
          </Tippy>
        </div>
        <div className={cx('action')}>
          <Button small>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
