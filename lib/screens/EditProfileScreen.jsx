import React from 'react';
import styles from '../../styles/EditProfileScreen.module.css';
export default function EditProfileScreen() {
  return (
    <div className={styles.main}>
      <div>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <div>Profile Image</div>
      </div>

      <div className={styles.editSection}>
        <div>Username</div>
        <input className={styles.inputBox} />
        <div>Wallet Address</div>
        <input className={styles.inputBox} />
        <div>Bio</div>
        <textarea
          name="message"
          rows="5"
          cols="15"
          className={styles.inputBox}
        />
        <div>Instagram username</div>
        <input className={styles.inputBox} />
        <div>Twitter username</div>
        <input className={styles.inputBox} />

        <div className={styles.btn}>Save</div>
      </div>
    </div>
  );
}
