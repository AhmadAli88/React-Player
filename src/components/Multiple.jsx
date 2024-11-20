// App.js
import React from 'react';
import ReactPlayer from 'react-player';

function Multiple() {
  return (
    <div className="App">
      <h1>Multiple React Players</h1>
      
      {/* YouTube Video */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vBtlMwiOas4"
        playing={true}
        controls={true}
        width="100%"
        height="auto"
      />

      {/* Audio File */}
      <ReactPlayer
        url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        playing={true}
        controls={true}
        width="100%"
        height="50px"
        config={{ file: { forceAudio: true } }} // Force audio mode
      />
    </div>
  );
}

export default Multiple;
