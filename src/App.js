import React, { Component } from 'react';
import ViewIsbn from './register/ViewIsbn';
import ViewBookDetail from './register/ViewBookDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'modeViewIsbn',
      data: {},
    };
  }

  changeMode = (mode, data) => {
    this.setState({ mode, data });
  }

  render() {
    const { mode, data } = this.state;

    if (mode === 'modeViewIsbn') {
      return <ViewIsbn changeMode={this.changeMode} />;
    }
    return <ViewBookDetail changeMode={this.changeMode} dataBookDetail={data} />;
  }
}

export default App;
