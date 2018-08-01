import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

import getBookDetail from './getBookDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewIsbn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn: '9784797392579',
    };
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const { isbn } = this.state;
    const dataBookDetail = await getBookDetail(isbn);
    // TODO: if there is no data, what type is the dataBookDetail?

    // if (dataBookDetail.indexOf(this.state.isbn >= 0) {
    //   // TODO: select record from DatabaseBooks.json

    // } else {
    //   // TODO: request AMAZON API

    // });

    const { changeMode } = this.props;
    changeMode('modeViewBookDetail', dataBookDetail);
  }

  render() {
    const { isbn } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ISBN:
        </Text>
        <TextInput
          value={isbn}
          onChangeText={(value) => { this.setState({ isbn: value }); }}
        />
        <Button
          title="本の詳細を検索"
          onPress={this.handleSearch}
        />
      </View>
    );
  }
}

export default ViewIsbn;
