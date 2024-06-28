import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import no_images from '@assets/no-images.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

const AccountItem = ({ data }) => {
    const [fallback, setFallBack] = useState('')
    const handleErr = () => {
        setFallBack(no_images)
    }
    
    return (
        <Link to={`/@${data.nickname}`} className={cx('box-item')} >
            <img    className={cx('avatar')} 
                    src={ fallback || data.avatar} 
                    alt={data.full_name} 
                    onError={handleErr}
            />
            <div className={cx('info')} >
                <p className={cx('name')} >
                    <span>{data.nickname}</span>
                    { data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </p>
                <span className={cx('username')} >{data.full_name}</span>
            </div>            
        </Link>
    )
}

export default AccountItem
