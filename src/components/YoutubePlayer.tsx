import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export function YoutubePlayer() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const isMobile = window.innerWidth <= 768;

  const opts: YouTubeProps["opts"] = {
    height: isMobile ? "440" : "480",
    width: isMobile ? "320" : "200",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId="vHsUX4vMuBA" opts={opts} onReady={onPlayerReady} />;
}
