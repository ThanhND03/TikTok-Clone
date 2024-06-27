import React, { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './menu.module.scss'

import BoxPopper from '~/Popper/BoxPopper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

const defaultFn = () => {}

const Menu = ({ children, items = [], onChange={defaultFn} }) => {

    const [history, setHistory] = useState([{data: items}])
    const current =  history[history.length - 1]

    const renderItems = () => {
        return current.data.map( (item, index) =>  {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                }else {
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <>
            <Tippy 
            interactive
            delay={[0, 800]}
            offset={[20, 10]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <BoxPopper>
                        { history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </BoxPopper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1) ) }
            >
                { children }
            </Tippy>
        </>
    )
}

export default Menu
