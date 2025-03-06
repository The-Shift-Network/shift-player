import { useRef } from "react";
import VideoJS from "./components/VideoJS.jsx";
import videojs from "video.js";

function App() {
  const playerRef = useRef(null);

  const options = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/video.mp4',
      type: 'video/mp4'
    }]
  };

  const onReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };


  return (
    <div>
      <VideoJS onReady={onReady} options={options} />
    </div>
  )
}

export default App
