import { movies } from "../data";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();

  const movie = movies.find(movie => movie.title === params.title);
  const genres = movie.genres.map(genre => {
    return <span key={genre}>{genre}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>{movie.title}</h1>
      <p>Runtime: {movie.time} minutes</p>
      Genres: {genres}
    </>
  );
};

export default Movie;
