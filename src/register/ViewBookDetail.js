import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';
import postRegisterBook from './postRegisterBook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewBookDetail extends Component {
  constructor(props) {
    super(props);

    const { dataBookDetail } = this.props;

    // もしかしたらJson-serverにデータがないときに、empty arrayだとTrueと判断されるので、
    // よろしく直すべし。
    if (dataBookDetail) {
      const targetBook = {};
      Object.keys(dataBookDetail).forEach((eachKey) => {
        targetBook[eachKey] = dataBookDetail[eachKey];
      });

      this.state = targetBook;
    } else {
      this.state = {
        id: null,
        book_id: '',
        book_num: null,
        isbn: null,
        book_name: '',
        authors: '',
        publishers: '',
        publication_date: null,
        lost_flag: false,
      };
    }
  }

  handleRegister = async (event) => {
    event.preventDefault();

    const dataRegisterBook = await postRegisterBook(this.state);
  }

  render() {
    const { dataBookDetail } = this.props;

    const array = Object.keys(dataBookDetail);

    return (
      <View style={styles.container}>
        {array.map(eachKey => (
          <React.Fragment>
            <Text>
              {eachKey}
            </Text>
            <TextInput
              value={this.state[eachKey]}
              onChangeText={(value) => {
                const newState = {};
                newState[eachKey] = value;
                this.setState(newState);
              }}
            />
          </React.Fragment>
        ))}
        <Button
          title="新しい書籍として登録"
          onPress={this.handleRegister}
        />
      </View>
    );
  }
}

export default ViewBookDetail;
