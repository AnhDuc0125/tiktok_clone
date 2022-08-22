import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';
import images from '~/assets/images';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, data = [] }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <MenuItem key={index} title={item.title} icon={item.icon}></MenuItem>
    ));
  };

  return (
    <Tippy
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
