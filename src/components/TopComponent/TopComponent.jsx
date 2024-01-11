import React from 'react'
import styles from '../TopComponent/TopComponent.module.css'
import avatar from "../../assets/avatar.png"
const TopComponent = () => {
  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.logoContainer}>
        <div className={styles.greenBgLogo}>
            vc
        </div>
        <div className={styles.noBgLogo}>
            os
        </div>
    </div>
    <div className={styles.profileContainer}>
        <div className={styles.avatarContainer}>
            <img src={avatar} alt="" />
        </div>
        <div className={styles.profileName}>
            Ankit Sharma
        </div>
    </div>
    </div>
    </>
  )
}

export default TopComponent