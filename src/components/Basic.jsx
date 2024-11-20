// App.js
import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <h1>React Player Example</h1>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=vBtlMwiOas4" // Working public video URL (YouTube)
        playing={true} // Start playing automatically
        controls={true} // Show play/pause and volume controls
        width="100%" // Make the video responsive
        height="auto" // Maintain aspect ratio
      />
    </div>
  );
}

export default App;
