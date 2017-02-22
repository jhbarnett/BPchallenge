import React, { Component } from 'react';
import styles from '../styles/queryForm.css';
import API from '../utils.js';

class QueryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: ''
    }
  }

  handleChanges(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    API.addListing(this.state.name, this.state.url)
    .then( res => {
        this.setState({
        name: '',
        url: ''
      })  
    })
    .catch( err => { console.log(err) })

    //Calls function on parent element to update ListArea (see App.js)
    //Alternatives include Redux & Event Bubbling
    .then(() => this.props.updateListings());
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.name} onChange={this.handleChanges.bind(this)} name="name" type="text" placeholder="Name"></input>
          <input value={this.state.url} onChange={this.handleChanges.bind(this)} name="url" type="text" placeholder="Url"></input>
          <button type='submit' value='Submit'>Enter</button>
        </form>
      </div>
    )
  }
}

export default QueryForm;
