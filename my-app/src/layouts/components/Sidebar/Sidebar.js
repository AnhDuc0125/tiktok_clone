import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/configs';
import * as Icon from '~/components/Icons';
import Nav from './Nav';
import NavItem from './NavItem';
import AccountItem from './AccountItem';
import AccountsBlock from './AccountsBlock';

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
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
        </AccountsBlock>
        <AccountsBlock label={'Following accounts'}>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
          <AccountItem></AccountItem>
        </AccountsBlock>
      </div>
    </aside>
  );
}

export default Sidebar;
