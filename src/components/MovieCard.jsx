import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({
  movieId,
  movieInfo,
  posterPath,
  title,
  onMovieCardClick,
}) => {
  return (
    <div>
      <img
        className="ml-2 mr-2 p-2 rounded-2xl cursor-pointer mb-6"
        src={`${IMAGE_CDN}/w500/${posterPath}`}
        alt={title}
        onClick={() => onMovieCardClick(movieId, title, movieInfo)}
      />
    </div>
  );
};

export default MovieCard;
