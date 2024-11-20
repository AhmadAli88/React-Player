// App.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function Customizing() {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  return (
    <div className="App">
      <h1>React Player with Custom Controls</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vBtlMwiOas4"
        playing={playing}
        volume={volume}
        onProgress={handleProgress}
        controls={true}
        width="100%"
        height="auto"
      />
      <div>
        <button onClick={handlePlayPause}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <p>Volume: {Math.round(volume * 100)}%</p>
        <p>Progress: {(progress * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default Customizing;
