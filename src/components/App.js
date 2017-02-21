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
      <div>
        <h1>Listings</h1>
        <QueryForm />
        <ListArea />
      </div>
    );
  }
}

export default App;