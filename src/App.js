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
      // songData
      Morning: songData.slice(0, songData.length / 2),
      Evening: songData.slice(songData.length/2, songData.length)
    }
  }

  onSwitchList = (track, side) =>{
    let updateSongList = this.state;
    const trk = updateSongList[side][track];

    if (side === 'Morning') {
      updateSongList.Evening.unshift(trk)
      updateSongList.Morning.splice(track, 1)
    } else {
      updateSongList.Morning.unshift(trk)
      updateSongList.Evening.splice(track, 1)
    }

    this.setState({updateSongList})

  };

  onChangeTrack = (track,side) => {
    let updateSongList = [...this.state[side]];

    let currentTrack = updateSongList[0];
    updateSongList[0] = updateSongList[track];
    let i = 1;

    while(i <= track){
      let nextTrack = updateSongList[i];
      updateSongList[i] = currentTrack
      currentTrack = nextTrack;
      i++
    }

    if (side === 'Morning') {
      this.setState({Morning: updateSongList})
    } else {
      this.setState({Evening: updateSongList})
    }
     console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state} moveToTopCallback={this.onChangeTrack} switchListCallback={this.onSwitchList}/>
        </main>
      </div>
    );
  }
}

export default App;
