import React from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './menu.module.scss'
import BoxPopper from '~/Popper/BoxPopper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

const Menu = ({ children, items = [] }) => {

    const renderItems = () => {
        return items.map( (item, index) => <MenuItem key={index} data={item} /> )
    }

    return (
        <>
            <Tippy 
            interactive
            delay={[0, 800]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <BoxPopper>
                        {renderItems()}
                    </BoxPopper>
                </div>
            )}
            >
                { children }
            </Tippy>
        </>
    )
}

export default Menu
