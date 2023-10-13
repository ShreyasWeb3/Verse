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
        className="mr-2 p-1 rounded-md cursor-pointer"
        src={`${IMAGE_CDN}/w500/${posterPath}`}
        alt={title}
        onClick={() => onMovieCardClick(movieId, title, movieInfo)}
      />
    </div>
  );
};

export default MovieCard;
