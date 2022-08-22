import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, data = [] }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <MenuItem key={index} title={item.title} icon={item.icon}></MenuItem>
    ));
  };
  console.log(children);

  return (
    <Tippy
      offset={[20, 10]}
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('more-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-wrapper')}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
