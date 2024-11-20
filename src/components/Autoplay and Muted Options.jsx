// App.js
import React from 'react';
import ReactPlayer from 'react-player';

function Autoplay() {
  return (
    <div className="App">
      <h1>Autoplay and Muted Example</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vBtlMwiOas4"
        playing={true}
        muted={true} // Muted by default
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default Autoplay;
