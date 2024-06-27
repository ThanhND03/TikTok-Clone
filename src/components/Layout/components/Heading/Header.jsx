import React, { useEffect, useState } from 'react'
// Scss
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faCloudArrowUp, faCoins, faEarthAsia, faEllipsisVertical, faGear, faGears, faInbox, faKeyboard, faMagnifyingGlass, faPaperPlane, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'
// Tippy
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
// img
import icon_avatar from '@assets/icon-avatar.png'
import logo from '@assets/tiktok-icon.png'
// Comp
import BoxPopper from '~/Popper/BoxPopper'
import AccountItem from '~/AccountItem/AccountItem'
import Button from '~/Button/Button'
import Menu from '~/Popper/Menu/Menu'

const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon={faEarthAsia}/>,
        title : 'English',
        children: {
            title: 'Language',
            data : [
                {
                    type : 'Languge', 
                    code : 'en',
                    title : 'English'
                },
                {
                    type : 'Languge', 
                    code : 'vi',
                    title : 'Tiếng Việt'
                }
            ]
        }
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
    const currentUser = true
    const  [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
        switch (menuItem.type) {
            case 'Language': 

                break;
            default:
        }
    }
    
    const userMenu = [
        {
            icon : <FontAwesomeIcon icon={faUser}/>,
            title : 'View profile',
            to : '/@linh'
        },
        {
            icon : <FontAwesomeIcon icon={faCoins}/>,
            title : 'Get coins',
            to : '/coin'
        },
        {
            icon : <FontAwesomeIcon icon={faGear}/>,
            title : 'Settings',
            to : '/setting'
        },
        ...MENU_ITEMS,
        {
            icon : <FontAwesomeIcon icon={faSignOut}/>,
            title : 'Log out',
            to : '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                    <p>Tóp Tóp</p>
                </div>
                <HeadlessTippy 
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy content='Upload Video' placement='bottom' delay={[0, 200]} >
                            <button className={cx('action-btn')} >
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                            </button>
                        </Tippy>
                        <Tippy content='Messages' placement='bottom' delay={[0, 200]}> 
                            <button className={cx('action-btn')} >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy content='Inbox' placement='bottom' delay={[0, 200]}> 
                            <button className={cx('action-btn')} >
                                <FontAwesomeIcon icon={faInbox} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
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
                    </>
                )}
                <Menu items={  currentUser ? userMenu : MENU_ITEMS } onChange={handleMenuChange}>
                    {currentUser ? (
                        <img className={cx('user-avatar')} src={icon_avatar} alt="Nguyen Van A" />
                    ) : (
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical}  />
                        </button>
                    )}
                </Menu> 
                </div>
            </div>
        </header>
    )
}

export default Header
