import React, { Component } from 'react'
import ReactPlayer from 'react-player'

var SC = require('soundcloud');

SC.initialize({
  client_id: '30205113',
  redirect_uri: 'https://soundcloud.com/afunja'
});

class SoundCloudPlayer extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url='https://soundcloud.com/afunja/sets/afunja-music-demos'
          // playing
          muted
          width="100%"
          style={{ marginRight: 'auto', marginLeft: 'auto', border: 0 }}
        />
      </div>
    );

  }
}

export default SoundCloudPlayer;
