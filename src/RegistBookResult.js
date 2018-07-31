import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
} from 'react-native';

class RegistBookResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.book}
        </Text>
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

export default RegistBookResult;