import React from 'react';
import styles from '../../styles/Profile.module.css';
import Image from 'next/image';
export default function Profile() {
  return (
    <div className={styles.main}>
      <div>
        <img
          className={styles.image}
          alt="profile"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </div>
      <div className={styles.username}>TheSandboxGame</div>
      <div className={styles.bio}>All Time NFT Hero</div>
      <div className={styles.addressBox}>0x97cd....dc46</div>
      <div className={styles.join}>Joined January 2022</div>
    </div>
  );
}
