import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  Button, 
  View 
} from 'react-native';

import { getBookDetail } from './getBookDetail';

class ViewIsbn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '9784797392579', 
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const dataBookDetail = await getBookDetail();

    if (dataBookDetail.indexOf(this.state.isbn >= 0) {
      // TODO: select record from DatabaseBooks.json
      

    } else {
      // TODO: request AMAZON API

    });

    changeMode('modeViewBookDetail', dataBookDetail);
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