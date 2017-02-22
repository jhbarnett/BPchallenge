import React from 'react';
import styles from '../styles/fullView.css';

const FullView = ({ toggleSelection, selection, removeListing, editListing }) => {
  return (
    <div className={styles.fullView} onClick={(e) => toggleSelection(e, selection)}>
      <h1>{selection.attributes.title}</h1>
      <h2>{selection.attributes.url}</h2>
      <button onClick={ (e) => editListing(e) }>Edit</button>
      <button onClick={ (e) => removeListing(e, selection.id) }>Delete</button>
    </div>
  )
}

export default FullView;
