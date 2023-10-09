import React, { useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh,faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  if (!trailer) return null;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1&mute=${isMuted ? 1 : 0}&fs=0&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <button
        onClick={toggleMute}
        className="absolute md:top-96 lg:top-[650px] right-4 px-2 py-1 bg-[rgba(0,0,0,.75)] cursor-pointer hover:opacity-80 text-white  rounded-full"
      >
        {isMuted ? <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeXmark} />}
      </button>
    </div>
  );
};

export default VideoBackground;
