import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {
  const directorList = directors.map(director => {
    return (<article key={director.name}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie => {
                  return <li key={movie}>{movie}</li>
                })}
              </ul>
            </article>
    )
  })
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>

    </>
  );
};

export default Directors;
