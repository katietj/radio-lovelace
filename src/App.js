import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';


songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {
  constructor() {
    super()
    console.log(this.state)
    this.state={
      songData
    }
  }

  onChangeTrack = (track,side) => {
    let updateSongList = [...this.state.songData];

    if (side === "Morning"){
      let newTopTrack = updateSongList.splice(track, 1)
      updateSongList.unshift(newTopTrack[0])
    }
    else if (side === "Evening"){
      let newTopTrack = updateSongList.splice(track, 1)
      updateSongList.unshift(newTopTrack[43])
    }
    this.setState({
      songData: updateSongList
    })
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} moveToTopCallback={this.onChangeTrack} />
        </main>
      </div>
    );
  }
}

export default App;
