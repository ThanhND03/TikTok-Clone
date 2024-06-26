import React from 'react'

import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

const BoxPopper = ({ children }) => {
    return (
        <>
            <div className={cx('box-popper')} >
                { children }
            </div>
        </>
    )
}

export default BoxPopper
