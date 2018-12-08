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
    let updateSongList = this.state.songData;
    let newTopTrack = " ";
    let i = " ";

    if (side === "Morning"){
     newTopTrack = updateSongList[0]
      updateSongList[0] = updateSongList[track];
      i = 1
    }
    else {
     track += 43
      newTopTrack = updateSongList[43];
      updateSongList[43]=updateSongList[track];
      i = 44
    }

    while (i <= track){
      let nextTrack = updateSongList[i]
      updateSongList[i] = newTopTrack
      newTopTrack = nextTrack
      i++
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
          <RadioSet tracks={songData} moveToTopCallback={this.onChangeTrack} />
        </main>
      </div>
    );
  }
}

export default App;
