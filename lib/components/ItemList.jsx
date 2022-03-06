/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../styles/ItemList.module.css';

export default function ItemList() {
  const assetsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.main}>
      {assetsList.map((i) => {
        return (
          <img
            key={i}
            alt="assats"
            className={styles.image}
            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          />
        );
      })}
    </div>
  );
}
