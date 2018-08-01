import React, { Component } from 'react';
import fetch from 'react-fetch';

const postRegisterBook = async () => {
  const apiUrlBooks = 'http://10.0.3.2:3000/books';
  
  fetch(apiUrlBooks, {
    method: 'POST'
    body: JSON.stringify({
      'isbn': this.state.isbn, 
      'book_name': this.state.bookName, 
      'authors': this.state.authors, 
      'publishers': this.state.publishers,
      'publication_date': this.state.publicationDate,
    })
  })
  .then((response) => response.json())
  .catch((error) => {
    console.log(error);
    alert(error);
  });
}

export default postRegisterBook;
