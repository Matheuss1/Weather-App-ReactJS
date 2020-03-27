import React, { Component } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import DayTime from './components/currentInfo/DayTime/DayTime'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: null,
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(place) {
    this.setState({ place });
  }


  render() {
    return (
      <>
        <SearchBar onSelect={this.handleSelect} />
        <DayTime />
      </>
    )
  }
}

