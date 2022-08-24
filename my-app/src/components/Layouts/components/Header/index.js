import classNames from 'classnames/bind';
import ToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import * as Icon from '~/components/Icons';
import Image from '~/components/Image';
import SearchBox from '../SearchBox';

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

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

  const MENU_USER = [
    {
      icon: <Icon.ProfileIcon />,
      title: 'View profile',
    },
    {
      icon: <Icon.CoinIcon />,
      title: 'Get coins',
    },
    {
      icon: <Icon.SettingIcon />,
      title: 'Settings',
    },
    ...MENU_ITEM,
    {
      icon: <Icon.LogOutIcon />,
      title: 'Log out',
      separate: true,
    },
  ];

  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={'/'} className={cx('logo')}>
          <Icon.Logo></Icon.Logo>
        </Link>

        <SearchBox />

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
              <ToolTip content="Messages" duration={0}>
                <span className={cx('icon-btn')}>
                  <Button>
                    <Icon.SendMessageIcon></Icon.SendMessageIcon>
                  </Button>
                </span>
              </ToolTip>
              <ToolTip content="Inbox" duration={0}>
                <span className={cx('icon-btn')}>
                  <Button className={cx('icon-btn')}>
                    <Icon.MessageBoxIcon></Icon.MessageBoxIcon>
                    <sup className={cx('sup')}>12</sup>
                  </Button>
                </span>
              </ToolTip>
            </>
          ) : (
            <>
              <Button filled>Log in</Button>
            </>
          )}
          <Menu
            data={currentUser ? MENU_USER : MENU_ITEM}
            onChange={handleChangeMenu}
          >
            {currentUser ? (
              <div className={cx('user-avatar')}>
                <Image
                  src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
                  alt="User's avatar"
                />
              </div>
            ) : (
              <div className={cx('more-icon')}>
                <Icon.MoreIcon />
              </div>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
