import { useState } from 'react';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const [para, setPara] = useState('');

  return (
    <div className={styles.categories_page}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => setPara('Under construction')}
      >
        check status
      </button>
      <p>{para}</p>
    </div>
  );
};

export default Categories;
