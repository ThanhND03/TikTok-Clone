import { useState } from 'react'
import { Link } from 'react-router-dom'
// Scss
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faInbox, faKeyboard, faPaperPlane, faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
// Tippy
import Tippy from '@tippyjs/react'
// import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
// img
import icon_avatar from '@assets/icon-avatar.png'
import logo from '@assets/tiktok-icon.png'
import no_images from '@assets/no-images.png'
// Comp
// import BoxPopper from '~/Popper/BoxPopper'
// import AccountItem from '~/AccountItem/AccountItem'
import Button from '~/Button/Button'
import Menu from '~/Popper/Menu/Menu'
import Search from '../Search/Search'

import routesConfig from '~src/config/routes'

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
                },
                
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
    const [fallback, setFallBack] = useState('')
    const handleErr = () => {
        setFallBack(no_images)
    }
    

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
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={logo} alt="" />
                    <p>Tóp Tóp</p>
                </Link>

                <Search />
                
                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <button className={cx('btn-uploads')} > 
                            <FontAwesomeIcon className={cx('icon-plus')} icon={faPlus} /> <p>Upload</p>
                        </button>
                        <Tippy content='Messages' placement='bottom' > 
                            <button className={cx('action-btn')} >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy content='Inbox' placement='bottom' > 
                            <button className={cx('action-btn')} >
                                <span className={cx('number-mes')} >88</span>
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
                        <img className={cx('user-avatar')} src={fallback || icon_avatar} alt="Nguyen Van A" onError={handleErr} />
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
