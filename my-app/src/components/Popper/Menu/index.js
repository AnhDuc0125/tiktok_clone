import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

const Menu = ({ children, data = [], onChange }) => {
  const [history, setHistory] = useState([{ data }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          title={item.title}
          icon={item.icon}
          separate={item.separate}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };

  return (
    <Tippy
      interactive
      hideOnClick="toggle"
      offset={[20, 3]}
      delay={[0, 800]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('more-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-wrapper')}>
            {history.length > 1 && (
              <MenuHeader
                heading={'Language'}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></MenuHeader>
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
