const getBookDetail = async (isbn) => {
  // TODO: Now you are using param - ?isbn= - depending on how to use json-server
  // if you create the backend, you might change the code on how to use the backend.
  const apiUrlBooks = `http://10.0.3.2:3000/books?isbn=${isbn}`;

  return fetch(apiUrlBooks, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch((error) => {
      alert(error);
    });
};

export default getBookDetail;
