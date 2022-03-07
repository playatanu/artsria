import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

export default function Hero() {
  const router = useRouter();

  const searchHandeler = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search/${event.target.value}`);
    }
  };

  return (
    <div className={styles.main}>
      <Image
        className={styles.logo}
        width={50}
        height={50}
        alt="logo"
        src="/../public/logo.png"
        onClick={() => router.push('/')}
      />
      <input
        className={styles.searchBox}
        placeholder="Search Assets"
        onKeyPress={searchHandeler}
      />
      <div className={styles.route}>Explore</div>
      <div className={styles.route}>Artist</div>
      <div className={styles.uploadBox} onClick={() => router.push('/create')}>
        Upload Asset
      </div>

      <img
        className={styles.profilePhoto}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        onClick={() => router.push('/profile/e')}
      />
    </div>
  );
}
