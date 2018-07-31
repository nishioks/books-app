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
import Toast from 'react-native-simple-toast';

class serchBookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mode: 'ISBNMODE',
          data: [],
          isbn: '0123456789', 
          bookName: 'DeepLearningの本', 
          authors: '山田太郎', 
          books: [],
        };
      }
    
      changeMode = (mode, data) => {
        this.setState({ mode, data });
      }
    
      pressSearchBookDetail () {
        this.setState({ mode, data });
        alert('貸出画面に遷移する');
      }
      
      
      handleRegister() {
        // alert('新しい書籍を登録しました。' + '「' + this.state.isbn + '」「' + this.state.bookName + '」「' + this.state.authors + '」');
        const apiUrlBooks = 'http://192.168.0.2:3000/books';
        return fetch(apiUrlBooks, {
          method: 'POST',
          body: JSON.stringify({
            'book_id': '9c5b8f7a-f70d-48ec-b48d-63c7c67c7e83', 
            'book_num': '3333333333',
            'isbn': this.state.isbn, 
            'book_name': this.state.bookNake, 
            'authors': this.state.authors, 
            'available': 'true'
          })
        })
        .then((response) => response.json())
        .catch((error) => {
          console.log('postエラー!');
          console.log(error);
          alert(error);
        });
      }
    
      // handleChange(text) {
      //   const bookValue = text.target.value;
      //   const key = text.target.name;
      //   this.setState({[key]: bookValue});
      // }
    
      // postData() {
      //   const apiUrlBooks = 'http://192.168.0.2:3000/books';
      //   return fetch(apiUrlBooks, {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       'book_id': '9c5b8f7a-f70d-48ec-b48d-63c7c67c7e83', 
      //       'book_num': '3333333333',
      //       'isbn': '3333333333', 
      //       'book_name': 'ブロックチェーンの本', 
      //       'authors': '鈴木一郎', 
      //       'available': 'true'
      //     })
      //   })
      //   .then((response) => response.json())
      //     .catch((error) => {
      //       alert(error);
      //     });
      // }
    
      // getData() {
      //   const apiUrlBooks = 'http://192.168.0.2:3000/books';
      //   fetch(apiUrlBooks)
      //   .then( res => res.json() )
      //   .then( res => this.books = res )
      //   .catch((error) => {
      //     alert(error);
      //   });
      // }
    
      getData() {
        // const apiUrlBooks = 'http://localhost:3000/books';
        const apiUrlBooks = 'http://192.168.0.2:3000/books';
        fetch(apiUrlBooks, {
          method: 'GET'
        })
        .then(response => response.json() )
        .then((responseJson) => 
        this.setState({
          books: responseJson.books
        })
      )
        .catch((error) => {
          alert(error);
          console.log('getエラー!!!');
          console.log(error);
        });
      }
    
      renderList() {
        return this.state.books.map(book =>
          <RegistBookResult key={book.book_id} book={book} />
        );
      }
    

render () {
    return (
        <View style={styles.container}>
          <Button 
            title="本の詳細を検索する" 
            onPress={this.pressearchBookDetail.bind(this)} />
          <Text>ISBN:</Text>
          <TextInput 
            value={this.state.isbn} 
            onChangeText={(value) => this.setState({isbn: value})} 
          />
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
            title="登録" 
            onPress={this.handleRegister.bind(this)} />
          <Button 
            title="GET" 
            onPress={this.getData.bind(this)}  />
          <Button 
            title="登録(TOAST)" 
            onPress={()=>Toast.show('登録しました')} />
          {/* <Button 
            title="登録(POST)" 
            onPress={this.postData.bind(this)}  />
          <ScrollView>
            <Card title="HTTP TEST">
              {this.renderList()}
            </Card>
          </ScrollView> */}
        </View>
      );
    }
  
}