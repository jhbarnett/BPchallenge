import React from 'react';
import styles from '../styles/cardView.css';

const CardView = ({ title, url, id, toggleSelection, removeListing, editListing }) => {
  return (
    <div className={styles.card}>
      <div>
        <button className={styles.delete} onClick={ (e) => removeListing(e, id) }>&#10008;</button>
        <button className={styles.edit} onClick={ (e) => editListing(e) }>&#9998;</button>
      </div>
      <h1>{title}</h1>
      <a href={url}>{url}</a>
    </div>
  )
}

export default CardView;
