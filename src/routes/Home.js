import { useState,useEffect } from 'react';
import Movie from '../components/Movie';
import styles from "./Home.module.css";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
  
    const getMovies = async () => {
      const response = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=rating`
      )).json();
      setMovies(response.data.movies);
      setLoading(false); 
    }
  
    useEffect(() => {
      getMovies()
    },[])
    return (
      <div className={styles.home}>
        {loading ? <h2 className={styles.loading}>Loading...</h2> : (
          <>
          <h1 className={styles.title}>Best Movies</h1>
          <div className={styles.main}>
            {movies.map(movie => (
              <Movie key={movie.id} movieData={movie}/>
            ))}
  
          </div>
          </>
        )}
      </div>
    );
}

export default Home;