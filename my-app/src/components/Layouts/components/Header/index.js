import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Menu';

const cx = classNames.bind(styles);

function Header() {
  const [resultSearch, setResultSearch] = useState([]);

  const MENU_ITEM = [
    {
      icon: <img src={images.language} alt="" />,
      title: 'English',
    },
    {
      icon: <img src={images.feedback} alt="" />,
      title: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <img src={images.keyboard} alt="" />,
      title: 'Keyboard shortcuts',
    },
  ];

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
          <Button
            outline
            beforeIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
            secondaryColor
          >
            Upload
          </Button>
          <Button filled>Log in</Button>
          <Menu data={MENU_ITEM}>
            <img className={cx('more-icon')} src={images.more} alt="" />
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
