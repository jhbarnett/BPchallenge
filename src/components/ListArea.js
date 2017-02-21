import React, { Component } from 'react';
import styles from '../styles/listArea.css';

import ListingView from './ListingView';
import EditView from './EditView';

class ListArea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <ListingView />
          <EditView />
        </div>
    )    
  }
}

export default ListArea;
