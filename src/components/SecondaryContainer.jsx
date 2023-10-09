import MovieList from "./MovieList"
import {useSelector} from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return;

  return (
    <div className="h-screen bg-[rgba(0,0,0,.90)]">
      <MovieList movies={movies}/>
    </div>
  )
}

export default SecondaryContainer