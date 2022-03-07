import React from 'react';
import ItemList from '../components/ItemList';
import styles from '../../styles/SearchScreen.module.css';
export default function SearchScreen({ query }) {
  return (
    <div className={styles.main}>
      <div className={styles.itemList}>
        <div className={styles.title}>{query}</div>

        <ItemList />
      </div>
    </div>
  );
}
