import React, { useEffect, useState } from 'react'
// Scss
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faFlorinSign, faKeyboard, faMagnifyingGlass, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons'
// Tippy
import Tippy from '@tippyjs/react/headless'
// import 'tippy.js/dist/tippy.css'
import logo from '@assets/tiktok-icon.png'
// Comp
import BoxPopper from '~/Popper/BoxPopper'
import AccountItem from '~/AccountItem/AccountItem'
import Button from '~/Button/Button'
import Menu from '~/Popper/Menu/Menu'

const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon={faEarthAsia}/>,
        title : 'English'
    },
    {
        icon : <FontAwesomeIcon icon={faCircleQuestion}/>,
        title : 'Feedback and help',
        to : '/feedback'
    },
    {
        icon : <FontAwesomeIcon icon={faKeyboard}/>,
        title : 'Keyboard shortcuts'
    },
]


const Header = () => {

    const  [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                    <p>Tóp Tóp</p>
                </div>
                <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                            <BoxPopper>
                                <h4 className={cx('search-label')} >Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                            </BoxPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx('clear')} >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                        <button className={cx('search-btn')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button
                        primary
                        // rightIcon={<FontAwesomeIcon icon={faSignIn}/>}
                        // rounded
                        // disabled
                        // outline
                        // large
                        // small
                        // Note: small & large phải đi cùng với outline
                    >
                        Log In
                    </Button>
                    <Menu 
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical}  />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
