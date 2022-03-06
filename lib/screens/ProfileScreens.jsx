import React from 'react';

import Profile from '../components/Profile';
import styles from '../../styles/ProfileScreen.module.css';

export default function ProfileScreens() {
  return (
    <div className={styles.main}>
      <Profile />
    </div>
  );
}
