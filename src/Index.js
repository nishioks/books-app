import React, { Component } from 'react';

class Index extends Component {
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
        return <RegisterBookResulr changeMode={this.changeMode} />;
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

export default Index;