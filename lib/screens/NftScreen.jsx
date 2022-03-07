import React from 'react';

import Asset from '../components/Asset';
import ItemList from '../components/ItemList';
import styles from '../../styles/NftScreen.module.css';
export default function NftScreen({ token }) {
  return (
    <div className={styles.main}>
      <Asset />

      <div className={styles.itemList}>
        <div className={styles.title}>Related photos</div>

        <ItemList />
      </div>

      <div className={styles.itemList}>
        <div className={styles.title}>Recommends photos</div>

        <ItemList />
      </div>
    </div>
  );
}
