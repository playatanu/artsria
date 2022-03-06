import styles from '../styles/Home.module.css';
import axios from 'axios';

import { uploadImage } from '../lib/services/uploadImage';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const run = async () => {
    try {
      const res = await axios.get('https://api.playatanu.repl.co/image/');

      setName(res.data.server);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };
  const uploadfile = async () => {
    const res = await uploadImage(file);

    setName(res);
  };

  return (
    <div className={styles.container} onClick={() => run()}>
      Hello {name}
      <input onChange={handleFileSelect} type="file" />
      <button onClick={uploadfile}>uploadq</button>
    </div>
  );
}
