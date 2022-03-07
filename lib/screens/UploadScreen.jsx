import React from 'react';
import styles from '../../styles/UploadScreen.module.css';
import { FiImage } from 'react-icons/fa';
import { useState } from 'react';
export default function UploadScreen() {
  const [file, setFile] = useState();

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };
  //   const uploadfile = async () => {
  //     const res = await uploadImage(file);

  //     setName(res);
  //   };
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.inputBoxd}>Submmit to Art Stack</div>
        <label htmlFor="upload">
          {file ? (
            <img className={styles.image} src={URL.createObjectURL(file)} />
          ) : (
            <div className={styles.image}>
              {/* <FiImage className={styles.image} /> */}
            </div>
          )}
        </label>

        <input
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          type="file"
          id="upload"
        />
        <input className={styles.inputBox} placeholder="Add a title" />
        <input className={styles.inputBox} placeholder="Add a tag" />
        <textarea
          className={styles.inputBox}
          placeholder="Add a decription (optional)"
        />
        <div className={styles.btn}>Submmit</div>
      </div>
    </div>
  );
}
