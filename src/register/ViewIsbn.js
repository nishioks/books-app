import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  Button, 
  View 
} from 'react-native';

import SearchBookDetail from './SearchBookDetail';

class ViewIsbn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '0123456789', 
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = () => {
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

  render () {
    return (
      <View style={styles.container}>
        <Text>ISBN:</Text>
        <TextInput 
          value={this.state.isbn} 
          onChangeText={(value) => this.setState({isbn: value})} />
        <Button 
          title="本の詳細を検索" 
          onPress={this.handleSearch} />
      </View>                
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ViewIsbn;