import React, { Component } from 'react';
import styles from '../styles/app.css';
import ListArea from './ListArea';
import QueryForm from './QueryForm';
import API from '../utils.js';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listings: [],
      selection: false
    }
  }

  componentDidMount() {
    this.fetchListings();
  }

  fetchListings() {
    API.getAllListings()
    .then( res => {
      this.setState({
        listings: res
      })
    });
  }

  updateListings() {
    this.fetchListings();
  }

  toggleSelection(e, id) {
    //avoids network request, desirable with small dataset
    const selection = 
      this.state.listings.filter(listing => 
        listing.id === id
      )[0]
    
    this.state.selection ?  
      this.setState({ selection: false }) :
      this.setState({ selection: selection })
  }

  removeListing(e, id) {
    console.log("remove: ", id)    
    // API.deleteListing(id)
  }

  editListing(e, id, data) {
    console.log("edit: ", id, " with: ", data)
    // API.editListing(id, data)
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Listings</h1>
        <div className={styles.queryForm}>
          <QueryForm 
            updateListings={this.updateListings.bind(this)}
          />
        </div>
        <div className={styles.listArea}>
          <ListArea 
            listings={this.state.listings} 
            toggleSelection={this.toggleSelection.bind(this)} 
            selection={this.state.selection}
          />
        </div>
      </div>
    );
  }
}

export default App;