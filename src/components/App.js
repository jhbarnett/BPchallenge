import React, { Component } from 'react';
import styles from '../styles/app.css';

import ListArea from './ListArea';
import QueryForm from './QueryForm';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Listings</h1>
        <div className={styles.queryForm}>
          <QueryForm />
        </div>
        <div className={styles.listArea}>
          <ListArea />
        </div>
      </div>
    );
  }
}

export default App;