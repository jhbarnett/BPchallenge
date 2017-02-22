import React, { Component } from 'react';
import styles from '../styles/listArea.css';
import CardView from './CardView';
import FullView from './FullView';

const ListArea = ({ listings , toggleSelection, selection, removeListing, editListing, editing }) => {
  switch (selection !== false) {
    case true:
      return (
        <FullView 
          toggleSelection={toggleSelection}
          selection={selection}
          removeListing={removeListing}
          editListing={editListing}
        />
      ) 
    default:
      return (
        <div className={styles.listContainer}>
          {
            listings.map((listing, i) =>
              <CardView 
                key={i}
                title={listing.attributes.title}
                url={listing.attributes.url}
                id={listing.id}
                toggleSelection={toggleSelection}
              /> )
          }
        </div>
      )
  }
}

export default ListArea;
