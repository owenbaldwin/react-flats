import React, { Component } from 'react';
import flats from '../../data/flat.js';

import FlatList from "./flat_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  selectFlat = () => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.state.selectFlat}
          />
        </div>
        <div className="right-scene">

        </div>
      </div>
    );
  }
}

export default App;
