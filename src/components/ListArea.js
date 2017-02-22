import React, { Component } from 'react';
import styles from '../styles/listArea.css';
import ListingView from './ListingView';
import EditView from './EditView';

const ListArea = ({ listings , toggleSelection, selection }) => {
  switch (selection !== false) {
    case true:
      return (
        <div onClick={(e) => toggleSelection(e, selection)}>
          <h1>{selection.attributes.title}</h1>
          <h2>{selection.attributes.url}</h2>
        </div>
      ) 
    default:
      return (
        <div>
          {
            listings.map((listing, i) =>
              <ListingView 
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
