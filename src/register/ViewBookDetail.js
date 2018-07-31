import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  Button, 
  View 
} from 'react-native';

class ViewBookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '',
      bookName: '',
      authors: '',
      publishers: '',
      publicationDate: ''
    }
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister = async(event) => {
    event.preventDefault();

    const dataRegisterBook = await postRegisterBook();

  }

  render () {
    return (
      <View style={styles.container}>
        <Text>ISBN:</Text>
        <TextInput 
          value={this.state.isbn} 
          onChangeText={(value) => this.setState({isbn: value})} />
        <Text>書籍タイトル:</Text>
        <TextInput 
          value={this.state.bookName} 
          onChangeText={(value) => this.setState({bookName: value})} />
        <Text>著者:</Text>
        <TextInput 
          value={this.state.authors} 
          onChangeText={(value) => this.setState({authors: value})} />
        <Text>出版社:</Text>
        <TextInput 
          value={this.state.publishers} 
          onChangeText={(value) => this.setState({publishers: value})} />
        <Text>発行年:</Text>
        <TextInput 
          value={this.state.publicationDate} 
          onChangeText={(value) => this.setState({publicationDate: value})} />
        <Button 
          title="新しい書籍として登録" 
          onPress={this.handleRegister} />
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

export default ViewBookDetail;