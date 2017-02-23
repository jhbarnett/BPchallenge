import React, { Component } from 'react';
import styles from '../styles/listArea.css';
import CardView from './CardView';

const ListArea = ({ listings , toggleEdit, selection, removeListing, submitEdit, editing }) => {
  return (
    <div className={styles.cardView}>
      {
        listings.map((listing, i) =>
          <CardView 
            key={i}
            title={listing.attributes.title}
            url={listing.attributes.url}
            id={listing.id}
            editing={editing}
            toggleEdit={toggleEdit}
            removeListing={removeListing}
            submitEdit={submitEdit}
          /> )
      }
    </div>
  )
}

export default ListArea;
