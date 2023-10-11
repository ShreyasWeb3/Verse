import { useState } from "react";
import MovieCard from "./MovieCard";
import {useDispatch} from 'react-redux';
import {addSelectedMovie} from '../utils/movieSlice'

const MovieList = ({ movies, title, onMovieCardClick }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const dispatch = useDispatch((store) => store.movies?.selectedMovie)
  const handleMovieCardClick = (movieId, title, movieInfo) => {
    setCurrentMovie({ movieId, title, movieInfo });
  };

  dispatch(addSelectedMovie(currentMovie));

  return (
    <>
      <h2 className="text-white px-4 py-2">{title}</h2>
      <div className="flex">
        <div className="flex  ">
          {movies.slice(0, 7).map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              movieInfo={movie.overview}
              posterPath={movie.poster_path}
              title={movie.title}
              onMovieCardClick={handleMovieCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
