import React from 'react';
import styles from '../../styles/Asset.module.css';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
export default function Asset({ token }) {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
      />
      <div className={styles.des}>
        <div className={styles.flex}>
          <div className={styles.token}>#{token || '250'}</div>
          <div className={styles.flex}>
            <FaHeart />
            <span>350</span>
          </div>
        </div>

        <div className={styles.title}>ArtStick</div>
        <div className={styles.about}>This is about of games photos</div>

        <div className={styles.flexStart}>
          <div className={styles.tag}>new</div>
          <div className={styles.tag}>opensea</div>
        </div>

        <div>Owner Atanu Debnath</div>
        <div>Creator Atanu Debnath</div>
        <div>Published on December 27, 2021</div>
        <div className={styles.flex}>
          <div className={styles.flex}>
            <Image
              className={styles.ethIcon}
              height={30}
              width={23}
              src="/../public/eth.png"
            />
            <div className={styles.price}>13.5</div>
          </div>
          <div className={styles.btn}>Buy Now</div>
        </div>
      </div>
    </div>
  );
}
