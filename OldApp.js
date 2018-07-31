import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  Button, 
  ScrollView, 
  Card, 
  View 
} from 'react-native';
import RegistBookResult from './src/RegistBookResult';

class OldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '0123456789', 
      bookName: 'DeepLearningの本', 
      authors: '山田太郎', 
      books: [],
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.getData = this.getData.bind(this);
  }

  // changeMode = (mode, data) => {
  //   this.setState({ mode, data });
  // }
  
  handleRegister() {
    // alert('新しい書籍を登録しました。' + '「' + this.state.isbn + '」「' + this.state.bookName + '」「' + this.state.authors + '」');
    const apiUrlBooks = 'http://10.0.3.2:3000/books';

    return fetch(apiUrlBooks, {
      method: 'POST',
      body: JSON.stringify({
        'book_id': '9c5b8f7a-f70d-48ec-b48d-63c7c67c7e83', 
        'book_num': '0000000000003',
        'isbn': this.state.isbn, 
        'book_name': this.state.bookNake, 
        'authors': this.state.authors, 
        'publishers': 'aa出版',
        'publication_date': '2018/7/31',
        'lost_flag': 'false'
      })
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  }

  // handleChange(text) {
  //   const bookValue = text.target.value;
  //   const key = text.target.name;
  //   this.setState({[key]: bookValue});
  // }

  getData = () => {
    const apiUrlBooks = 'http://10.0.3.2:3000/books';

    fetch(apiUrlBooks, {
      method: 'GET'
    })
    .then(response => response.json() )
    .then((responseJson) => {
      console.log(responseJson);
      console.log(responseJson.length);
      this.setState({
        books: responseJson.books
      });
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
  }

  renderList = () => {
    return this.state.books.map(book =>
      <RegistBookResult key={book.book_id} book={book} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ISBN:</Text>
        <TextInput 
          value={this.state.isbn} 
          onChangeText={(value) => this.setState({isbn: value})} />
        <Text>本のタイトル:</Text>
        <TextInput 
          value={this.state.bookName} 
          onChangeText={(value) => this.setState({bookName: value})} />
        <Text>著者:</Text>
        <TextInput 
          value={this.state.authors} 
          onChangeText={(value) => this.setState({authors: value})} />
        <Text>この書籍を新規登録します。 </Text>
        <Button 
          title="登録(POST)" 
          onPress={this.handleRegister} />
        <Button 
          title="閲覧(GET)" 
          onPress={this.getData}  />
        {/* <ScrollView>
          <Card title="HTTP TEST">
            {this.renderList()}
          </Card>
        </ScrollView> */}
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

export default OldApp;