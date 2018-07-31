import React, { Component } from 'react';
import ViewIsbn from './register/register/ViewIsbn';
import ViewBookDetail from './register/ViewBookDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'modeViewIsbn',
      data: [],
    };
  }

  changeMode = (mode, data) => {
    this.setState({ mode, data });
  }

  render() {
    const { mode, data } = this.state;

    switch (mode) {
      case 'modeViewIsbn': 
        return <ViewIsbn changeMode={this.changeMode} />;
      // case 'modeSearchbookDetail':
      //   return <SearchBookDetail changeMode={this.changeMode} />;
      case 'modeViewBookDetail': 
        return <ViewBookDetail changeMode={this.changeMode} data={data} />;
      // case 'modeRegisterBookResult': 
      //   return <RegisterBookResult changeMode={this.changeMode} />;
      default: 
        throw new error();
    }
  }

}

export default App;