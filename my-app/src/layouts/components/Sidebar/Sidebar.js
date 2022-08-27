import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/configs';
import * as Icon from '~/components/Icons';
import { Nav, NavItem } from './Nav';
import { AccountsBlock, AccountItem } from './AccountsBlock';
import { Discover, Hashtag } from './Discover';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Nav>
          <NavItem to={config.route.home} title={'For You'} icon={<Icon.Home />} activedIcon={<Icon.ActivedHome />} />
          <NavItem
            to={config.route.following}
            title={'Following'}
            icon={<Icon.Users />}
            activedIcon={<Icon.ActivedUsers />}
          />
          <NavItem to={config.route.live} title={'LIVE'} icon={<Icon.Live />} activedIcon={<Icon.ActivedLive />} />
        </Nav>
        <AccountsBlock label={'Suggested accounts'}>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
        </AccountsBlock>
        <AccountsBlock label={'Following accounts'}>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
        </AccountsBlock>
        <Discover>
          <Hashtag title={'suthatla'} />
          <Hashtag title={'mackedoi'} />
          <Hashtag title={'sansangthaydoi'} />
          <Hashtag title={'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n'} music />
          <Hashtag title={'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng'} music />
          <Hashtag title={'Thiên Thần Tình Yêu - RICKY STAR'} music />
        </Discover>
      </div>
    </aside>
  );
}

export default Sidebar;
