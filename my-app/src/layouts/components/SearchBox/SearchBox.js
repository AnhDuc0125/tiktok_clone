import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import * as Icon from '~/components/Icons';
import styles from './SearchBox.module.scss';
import { useDebound } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const deboundValue = useDebound(searchValue, 500);

  const searchRef = useRef();
  const handleClearValue = () => {
    setSearchValue('');
    setResultSearch([]);
    searchRef.current.focus();
  };

  const handleShowResult = (boolean) => {
    setShowResult(boolean);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) return;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    if (!deboundValue.trim()) {
      setResultSearch([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(deboundValue);

      setResultSearch(result);
      setLoading(false);
    };

    fetchApi();
  }, [deboundValue]);

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
            autoComplete="off"
            className={cx('seach-input')}
            value={searchValue}
            onChange={handleChange}
            onFocus={() => handleShowResult(true)}
          />
          {searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClearValue}>
              <Icon.Times />
            </button>
          )}
          {loading && <Icon.Loading className={cx('spinner')} />}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <Icon.Search></Icon.Search>
          </button>
        </div>
      </Tippy>
    </div>
  );
};

export default SearchBox;
