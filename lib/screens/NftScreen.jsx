import React from 'react';

import Asset from '../components/Asset';
import styles from '../../styles/NftScreen.module.css';
export default function NftScreen({ token }) {
  return (
    <div className={styles.main}>
      <Asset />
    </div>
  );
}
