import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
} from 'react-native';
import ViewIsbn from './src/register/ViewIsbn';
import SearchBookDetail from './src/register/SearchBookDetail';
import RegisterBookResult from './src/register/RegistBookResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'ISBNMODE',
      data: [],
    };
  }

  changeMode = (mode, data) => {
    this.setState({ mode, data });
  }

  render() {
    const { mode, data } = this.state;

    switch (mode) {
      case 'ISBNMODE': 
        return <ViewIsbn changeMode={this.changeMode} />;
      case 'SEARCHMODE':
        return <SearchBookDetail changeMode={this.changeMode} />;
      case 'VIEWMODE': 
        return <ViewBookDetail changeMode={this.changeMode} />;
      case 'RESULTMODE': 
        return <RegisterBookResult changeMode={this.changeMode} />;
      default: 
        throw new error();
    }
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

export default App;