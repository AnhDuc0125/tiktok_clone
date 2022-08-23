import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './SearchBox.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import * as Icon from '~/components/Icons';

const cx = classNames.bind(styles);

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const searchRef = useRef();
  const handleClearValue = () => {
    setSearchValue('');
    setResultSearch([]);
    searchRef.current.focus();
  };

  const handleShowResult = (boolean) => {
    setShowResult(boolean);
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`
    )
      .then((res) => res.json())
      .then((result) => {
        setResultSearch(result.data);
      });
  }, [searchValue]);

  return (
    <div>
      <Tippy
        interactive
        visible={showResult && resultSearch.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <p className={cx('search-title')}>Accounts</p>
              {resultSearch.map((result) => (
                <AccountItem key={result.id} data={result}></AccountItem>
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => handleShowResult(false)}
      >
        <div className={cx('search')}>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            className={cx('seach-input')}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => handleShowResult(true)}
          />
          {searchValue && (
            <button className={cx('clear')} onClick={handleClearValue}>
              <Icon.TimesIcon />
            </button>
          )}
          {/* <Icon.LoadingIcon className={cx('spinner')} /> */}
          <button className={cx('search-btn')}>
            <Icon.SearchIcon></Icon.SearchIcon>
          </button>
        </div>
      </Tippy>
    </div>
  );
};

export default SearchBox;
