import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  console.log(props.tracks);
  const playlists = {
    morningTracks: props.tracks.Morning,
    eveningTracks: props.tracks.Evening
  };
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          moveToTopCallback={props.moveToTopCallback}
          switchListCallback={props.switchListCallback}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          moveToTopCallback={props.moveToTopCallback}
          switchListCallback={props.switchListCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
