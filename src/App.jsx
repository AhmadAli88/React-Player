
import './App.css'
import Autoplay from './components/Autoplay and Muted Options'
import Basic from './components/Basic'
import PlaybackSpeed from './components/Custom Playback Speed'
import Customizing from './components/Customizing Playback Controls'
import FullScreen from './components/Full-Screen Mode and Looping'
import Multiple from './components/Multiple'

function App() {
  
  return (
   <div>
    <Basic/>
    <Customizing/>
    <Multiple/>
    <FullScreen/>
    <Autoplay/>
    <PlaybackSpeed/>
   </div>
  )
}

export default App
