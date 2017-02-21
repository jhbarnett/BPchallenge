import React from 'react';
import styles from '../styles/listArea.css';

import ListingView from './ListingView';
import EditView from './EditView';

const ListArea = (props) => {
  return (
    <div>
        <h1>Hello ListArea</h1>
        <ListingView />
        <EditView />
      </div>
  )
}

export default ListArea;
