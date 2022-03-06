/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

export default function Hero() {
  const router = useRouter();
  return (
    <div className={styles.main} onClick={() => router.push('/')}>
      <Image
        className={styles.logo}
        width={50}
        height={50}
        alt="logo"
        src="/../public/logo.png"
      />
      <input className={styles.searchBox} placeholder="Search Assets" />
      <div className={styles.route}>Explore</div>
      <div className={styles.route}>Artist</div>
      <div className={styles.uploadBox}>Upload Asset</div>

      <img
        className={styles.profilePhoto}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        onClick={() => router.push('/profile/12')}
      />
    </div>
  );
}
