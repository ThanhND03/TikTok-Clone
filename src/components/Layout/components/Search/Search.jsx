
import { useEffect, useRef, useState } from 'react'

import * as searchSevices  from '~src/apiSevices/SearchSevices'

// Scss
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
const cx = classNames.bind(styles)
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
// Tippy
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
// Comp
import BoxPopper from '~/Popper/BoxPopper'
import AccountItem from '~/AccountItem/AccountItem'
import {useDebounce} from '~src/Hooks/index'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const  [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    useEffect(() => {
        if(!debounced.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

        const fetchApi = async () => {

            setLoading(true)

            const result = await searchSevices.search(debounced)

            setSearchResult(result)
            setLoading(false)
        }

        fetchApi()

    }, [debounced])


    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
    <HeadlessTippy 
        interactive
        visible={showResult && searchResult.length > 0}
        render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                <BoxPopper>
                    <h4 className={cx('search-label')} >Accounts</h4>
                    {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                    ))}
                </BoxPopper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input type="text" spellCheck={false} ref={inputRef}
            placeholder='Search accounts and videos' 
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue} onFocus={() => setShowResult(true)}
            />

            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={() => handleClear()} 
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }
        
            <button className={cx('search-btn')} >
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
    </HeadlessTippy>

    )
}

export default Search
