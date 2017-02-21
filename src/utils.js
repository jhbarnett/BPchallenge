import axios from 'axios';

const API = {
  root: 'http://clientside-api.herokuapp.com/apipie',
  key: '845750dcd14d22ac05a36a8cd793f690',
  GET_ALL: '/api/v1/listings',
  GET_ONE: '/api/v1/listings/:id',
  PUT: '/api/v1/listings/:id',
  DELETE: '/api/v1/listings/:id',
  POST: '/api/v1/listings'
}

axios.defaults.baseURL = API.root;
axios.defaults.headers.common['Authorization'] = API.key;

export default {
  //   User should be able to add new listings -- POST
    addListing: () => {
      // return "ADD A LISTING"
      axios.get(API.GET_ALL)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
    },      
  //   User should be able to remove existing listings -- DELETE
    removeListing: () => {
      return "REMOVE LISTING"
    },
  //   User should be able to edit an existing listing -- PUT
    editListing: () => {
      return "EDIT LISTING"
    },
  //   User should be able to view his/her own listings
    getOneListing: () => {
      return "GET ONE LISTING"
    },
  //   User should be able to view others' available listings
    getAllListings: () => {
      return "GET ALL LISTING"
    }
}