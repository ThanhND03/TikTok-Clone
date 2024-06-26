import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)

const AccountItem = () => {
    return (
        <div className={cx('box-item')} >
            <img    className={cx('avatar')} 
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&nonce=47837&refresh_token=c197e2f8c72e26002e123dbca957ad7a&x-expires=1719298800&x-signature=YOxq3lHHwOWAWK6AV7vt30LpFOQ%3D&shp=30310797&shcp=-" 
                    alt="" 
            />
            <div className={cx('info')} >
                <p className={cx('name')} >
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')} >Đào Lê Phương Hoa</span>
            </div>            
        </div>
    )
}

export default AccountItem
