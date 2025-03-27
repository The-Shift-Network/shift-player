import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

import 'video.js/dist/video-js.css';
import './skin.css';

export const VideoJS = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const currentOptions = {
        controlBar: {
          children: [
            'skipBackward',
            'playToggle',
            'skipForward',
            'volumePanel',
            'currentTimeDisplay',
            'timeDivider',
            'durationDisplay',
            'progressControl',
            'pictureInPictureToggle',
            'fullscreenToggle',
          ],
          skipButtons: {
            forward: 5,
            backward: 5,
          }
        },
        ...options
      };

      const player = playerRef.current = videojs(videoElement, currentOptions, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

      player.addClass('vjs-custom-skin');

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {

      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);

      player.addClass('vjs-custom-skin');
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}

export default VideoJS;
