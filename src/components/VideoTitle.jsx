import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const VideoTitle = ({ title: propsTitle, overview: propsOverview }) => {
  const selectedMovieKey = useSelector((store) => store.movies?.selectedMovie);

  if (selectedMovieKey) {
    const { title } = selectedMovieKey;

    return (
      <>
        <div>
          <a
            href={
              "https://tpb27.ukpass.co/search.php?q=" +
              title +
              "&all=on&search=Pirate+Search&page=0&orderby="
            }
            target="_blank"
            rel="noreferrer"
          >
            <button 
            // className="py-2 px-4 m-2 cursor-pointer bg-[#636264] opacity-90 right-0 top-[67%] md:top-[74%] lg:top-[99%] rounded-md absolute"
            className="absolute top-[67%] md:top-[74%] lg:top-[800px] right-4 px-2 py-1 bg-[#636264] cursor-pointer hover:opacity-80 text-white rounded-md z-10"

            >
              <FontAwesomeIcon className="px-2" icon={faCloudArrowDown} />
              Download
            </button>
          </a>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-screen md:h-96 md:pt-[7%] lg:pt-[20%] aspect-video pt-[20%] px-24 py-8 absolute  text-white ">
        <h1 className="hidden md:block lg:text-6xl md:text-4xl font-bold">
          {propsTitle}
        </h1>
        <h3 className="hidden md:block w-1/5 lg:text-lg md:text-base py-8">
          {propsOverview?.slice(0, 70)}
        </h3>
        <div>
          <button className="hidden md:block py-2 px-4 m-2 cursor-pointer bg-[#636264] opacity-80 rounded-md">
            <FontAwesomeIcon className="px-2" icon={faCircleInfo} />
            More Info
          </button>
        </div>
      </div>
    );
  }
};

export default VideoTitle;
