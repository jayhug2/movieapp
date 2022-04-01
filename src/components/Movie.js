import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

const Movie = ({movieData}) => {
  

    return (
        <div className={styles.container}>
          <div className={styles.imgbox}>
          <Link to={`/detail/${movieData.id}`}>
            <img 
              src={movieData.medium_cover_image} 
              alt={movieData.title}/>
          </Link>
          </div>
          <div className={styles.summary}>
            <Link to={`/detail/${movieData.id}`}>
              <h2>{movieData.title}</h2>
            </Link>
            {
              <ul className={styles.genres}>{movieData.genres && movieData.genres.map((gen) =>
                <li key={gen}>{gen}</li>
              )}
              </ul>
            }
            <p className={styles.sum}>{movieData.summary.length > 200 ? `${movieData.summary.slice(0,200)}...` : movieData.summary}</p>
          </div>
        </div>
    )
}

export default Movie;