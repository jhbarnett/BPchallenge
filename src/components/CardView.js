import React from 'react';
import styles from '../styles/cardView.css';

const CardView = ({ title, url, id, toggleSelection }) => {
  return (
    <div className={styles.card} onClick={(e) => toggleSelection(e, id)}>
      <h1>{title}</h1>
    </div>
  )
}

export default CardView;
