import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://clientside-api.herokuapp.com',
  headers: {
    'Authorization': '845750dcd14d22ac05a36a8cd793f690',
    'Content-Type': 'application/vnd.api+json'
  }
});

export default {
  //   User should be able to add new listings -- POST
    addListing: (title, url) => {
      const params = {
        title: `data[attributes][title]=${title}`,
        url: `data[attributes][url]=${url}`
      }

      return instance.post(`/api/v1/listings?${params.title}&${params.url}`)
      .then(res => res.data )
      .catch(err => err )
    },      
  //   User should be able to remove existing listings -- DELETE
    removeListing: (id) => {
      return instance.delete(`/api/v1/listing/${id}`)
      .then(res => res.data )
      .catch(err => err )
    },
  //   User should be able to edit an existing listing -- PUT
    editListing: (id) => {
      return instance.put(`/api/v1/listing/${id}`)
      .then(res => res.data )
      .catch(err => err )
    },
  //   User should be able to view his/her own listings - GET
    getOneListing: (id) => {
      return instance.get(`/api/v1/listing/${id}`)
      .then(res => res.data )
      .catch(err => err )
    },
  //   User should be able to view others' available listings - GET
    getAllListings: () => {
      return instance.get('/api/v1/listings')
      .then(res => res.data )
      .catch(err => err )
    }
}