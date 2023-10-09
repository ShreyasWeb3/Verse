import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen md:h-96 md:pt-[7%] aspect-video pt-[20%] px-24 py-8 absolute  text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h3 className="w-1/4 text-lg py-8">{overview}</h3>
      <div>
        <button className="py-2 px-4 m-2 cursor-pointer bg-white text-black hover:opacity-80 rounded-md">
          <FontAwesomeIcon className="px-2" icon={faPlay} />
          Play
        </button>
        <button className="py-2 px-4 m-2 cursor-pointer bg-[#636264] opacity-80 rounded-md">
          <FontAwesomeIcon className="px-2" icon={faCircleInfo} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
