import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ backdropPath, title }) => {
  return (
    <div>
      {/* <p className="">{title}</p> */}
      <img
        className="p-1 rounded-md "
        src={`${IMAGE_CDN}/w185/${backdropPath}`}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
