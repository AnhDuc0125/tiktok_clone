import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import * as Icon from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
  const [resultSearch, setResultSearch] = useState([]);

  const MENU_ITEM = [
    {
      icon: <Icon.LanguageIcon />,
      title: 'English',
      children: {
        heading: 'Language',
        data: [
          {
            code: 'en',
            title: 'English',
          },
          {
            code: 'vi',
            title: 'Tiếng Việt',
          },
        ],
      },
    },
    {
      icon: <Icon.FeedbackIcon />,
      title: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <Icon.KeyboardIcon />,
      title: 'Keyboard shortcuts',
    },
  ];

  const currentUser = false;

  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Icon.Logo></Icon.Logo>
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
                <Icon.TimesIcon />
              </button>
              <Icon.LoadingIcon />
              <button className={cx('search-btn')}>
                <Icon.SearchIcon></Icon.SearchIcon>
              </button>
            </div>
          </Tippy>
        </div>

        <div className={cx('action')}>
          <Button
            outline
            beforeIcon={<Icon.PlusIcon></Icon.PlusIcon>}
            secondaryColor
          >
            Upload
          </Button>

          {currentUser ? (
            <>
              <button>
                <Icon.SendMessageIcon></Icon.SendMessageIcon>
              </button>
              <button>
                <Icon.MessageBoxIcon></Icon.MessageBoxIcon>
              </button>
            </>
          ) : (
            <>
              <Button filled>Log in</Button>
              <Menu data={MENU_ITEM} onChange={handleChangeMenu}>
                <div className={cx('more-icon')}>
                  <Icon.MoreIcon />
                </div>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
