import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Sidebar.module.scss';
import * as Icon from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <Tippy
      delay={[1000, 0]}
      offset={[-10, 0]}
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx('account-info')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('account-popper')}>
            <div className={cx('heading')}>
              <Image src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" className={cx('popper-avatar')} />
              <Button filled>Follow</Button>
            </div>
            <div className="body">
              <span className={cx('popper-nickname')}>theanh28entertainment</span>
              <p className={cx('popper-fullname')}>theanh28entertainment</p>
              <p className={cx('popper-data')}>
                <span className={cx('followers-num')}>7M</span>
                <span className={cx('followers-title')}>Followers</span>
                <span className={cx('likes-num')}>487M</span>
                <span className={cx('likes-title')}>Likes</span>
              </p>
            </div>
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('account-item')}>
        <Image src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" className={cx('avatar')} />
        <div className={cx('info')}>
          <h4 className={cx('nickname')}>
            <strong>theanh28entertainment</strong>
            <span className={cx('check')}>
              <Icon.Check></Icon.Check>
            </span>
          </h4>
          <p className={cx('fullname')}>Vũ Đức Anh</p>
        </div>
      </div>
    </Tippy>
  );
};

export default AccountItem;
