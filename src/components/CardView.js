import React from 'react';
import styles from '../styles/cardView.css';

const CardView = ({ title, url, id, toggleEdit, removeListing, submitEdit, editing }) => {
  switch (id === editing.id) {
    case true:
      return (
        <div className={styles.card}>
          <div>
            <h3>Editing</h3>
            <button className={styles.edit} onClick={ (e) => submitEdit(e, id) }>&#10004;</button>
          </div>
          <input id="newTitle" className={styles.editTitle} defaultValue={title} />
          <input id="newUrl" className={styles.editUrl} defaultValue={url} />
        </div>
      )
    default:
      return (
        <div className={styles.card}>
          <div>
            <button className={styles.delete} onClick={ (e) => removeListing(e, id) }>&#10008;</button>
            <button className={styles.edit} onClick={ (e) => toggleEdit(e, id) }>&#9998;</button>
          </div>
          <h1 className={styles.propertyTitle}>{title}</h1>
          <a className={styles.propertyUrl} href={url}>{url}</a>
        </div>
      )
  }
}

export default CardView;
