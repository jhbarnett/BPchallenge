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
      editing: false
    }
  }

  componentDidMount() {
    this.updateListings();
  }

  updateListings() {
    API.getAllListings()
    .then( res => this.setState({ listings: res }));
  }

  toggleEdit(e, id) {
    const parentCard = e.target.parentElement.parentElement;

    const listing = this.state.listings.filter(l => l.id === id)[0];

    if (this.state.editing.id === id || !this.state.editing) {
      if (this.state.editing) {
        parentCard.style.transform = ''
        parentCard.style.backgroundColor = '';
        this.setState({ editing: false });
      } else {
        parentCard.style.transform = 'rotateX(360deg)';
        parentCard.style.backgroundColor = 'white';
        this.setState({ editing: listing });
      }
    } else {
      alert("Finish editing that other card first!")
    }
  }

  removeListing(e, id) {   
    API.deleteListing(id)
    .catch(err => console.log(err));

    const newList = this.state.listings.filter(listing => listing.id !== id);

    this.setState({ listings: newList });
  }

  submitEdit(e, id) {
    const newTitle = document.getElementById("newTitle").value;
    const newUrl = document.getElementById("newUrl").value;

    API.editListing(id, newTitle, newUrl)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    //Revise local listing object for immediate UI change
    this.state.editing.attributes.title = newTitle;
    this.state.editing.attributes.url = newUrl;

    this.toggleEdit(e, id);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>{
            this.state.listings.length === 1 ?
            (`${this.state.listings.length} Listing`) :
            (`${this.state.listings.length || ''} Listings`)
          }</h1>
          <QueryForm 
            updateListings={this.updateListings.bind(this)}
          />
        </div>
        <div className={styles.listArea}>
        { this.state.listings.length ? (
            <ListArea 
              listings={this.state.listings} 
              toggleEdit={this.toggleEdit.bind(this)} 
              selection={this.state.selection}
              removeListing={this.removeListing.bind(this)}
              submitEdit={this.submitEdit.bind(this)}
              editing={this.state.editing}
              />
          ) : (
            <div className={styles.listArea}><h3> ADD SOME PROPERTY LISTINGS </h3></div>
          )
        }
        </div>
      </div>
    );
  }
}

export default App;