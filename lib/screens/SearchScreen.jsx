import React from 'react';
import ItemList from '../components/ItemList';
import styles from '../../styles/SearchScreen.module.css';
export default function SearchScreen({ query }) {
  return (
    <div className={styles.main}>
      <div className={styles.flex}>
        <div className={styles.flex}>
          <div className={styles.text}>Editorial</div>
          <div className={styles.text}>Following</div>
        </div>

        <div>Sort by Relevance</div>
      </div>

      <div className={styles.title}>{query}</div>
      <ItemList />
    </div>
  );
}
