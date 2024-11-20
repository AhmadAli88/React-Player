// App.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function FullScreen() {
  const [isLooping, setIsLooping] = useState(true);

  return (
    <div className="App">
      <h1>React Player with Loop and Full-Screen</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vBtlMwiOas4"
        playing={true}
        controls={true}
        loop={isLooping} // Enable looping
        width="100%"
        height="auto"
      />
      <button onClick={() => setIsLooping(!isLooping)}>
        {isLooping ? 'Disable Loop' : 'Enable Loop'}
      </button>
    </div>
  );
}

export default FullScreen;
