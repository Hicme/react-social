import React from 'react'
import styles from '../assets/css/Profile.module.scss';

const Profile = () => (
  <div className={styles.content}>
    <div>
      <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" alt="#" />
    </div>
    <div>
      ava + descr
    </div>
    <div>
      <h2>My posts</h2>
      <div className={styles.posts}>
        <div className={styles.item}>
          post 1
        </div>
        <div className={styles.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
)

export default Profile
