import React from 'react';
import styles from '../styles/listingView.css';

const ListingView = ({ title, url, id, toggleSelection }) => {
  return (
    <div onClick={(e) => toggleSelection(e, id)}>
      <h1>{title}</h1>
    </div>
  )
}

export default ListingView;
