import React, { Component } from 'react';
import fetch from 'react-fetch';

const gethBookDetail = async () => {
  const apiUrlBooks = 'http://10.0.3.2:3000/books';

  fetch(apiUrlBooks, {
    method: 'GET'
  })
  .then(response => response.json() )
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      books: responseJson.books
    });
  })
  .catch((error) => {
    alert(error);
  });
}

export default getBookDetail;