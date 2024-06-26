import React from 'react'
import Button from '~/Button/Button'

import classNames from 'classnames/bind'
import styles from './menu.module.scss'
const cx = classNames.bind(styles)

const MenuItem = ({ data }) => {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} >
            {data.title}
        </Button>
    )
}

export default MenuItem
