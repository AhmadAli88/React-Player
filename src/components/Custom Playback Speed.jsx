// App.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function PlaybackSpeed() {
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleSpeedChange = (e) => {
    setPlaybackRate(parseFloat(e.target.value)); // Convert the input value to a float
  };

  return (
    <div className="App">
      <h1>Playback Speed Control</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vBtlMwiOas4" // Public YouTube video URL
        playing={true}
        controls={true}
        playbackRate={playbackRate} // Set playback speed
        width="100%"
        height="auto"
      />
      <div style={{ marginTop: '20px' }}>
        <label>Playback Speed: </label>
        <input
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          value={playbackRate}
          onChange={handleSpeedChange}
        />
        <span>{playbackRate}x</span>
      </div>
    </div>
  );
}

export default PlaybackSpeed;
