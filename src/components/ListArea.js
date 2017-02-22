import React, { Component } from 'react';
import styles from '../styles/listArea.css';
import CardView from './CardView';

const ListArea = ({ listings , toggleSelection, selection, removeListing, editListing }) => {
  return (
    <div className={styles.cardView}>
      {
        listings.map((listing, i) =>
          <CardView 
            key={i}
            title={listing.attributes.title}
            url={listing.attributes.url}
            id={listing.id}
            toggleSelection={toggleSelection}
            removeListing={removeListing}
            editListing={editListing}
          /> )
      }
    </div>
  )
}

export default ListArea;
