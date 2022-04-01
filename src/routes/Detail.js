import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import styles from "./Detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const getThisMovie = async () => {
        const response = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetails(response.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getThisMovie();
    },[])
    console.log(details);
    return (
      <div className={styles.detail}>
        {loading
        ? <h2 className={styles.loading}>loading...</h2>
        : (
        <div className={styles.container}>
          <div className={styles.cover}>
            <img src={details.large_cover_image} alt={details.title} />
          </div>
          <div className={styles.infos}>
            <h2>{details.title_long}</h2>
            <span>{`Runtime : ${details.runtime} minutes`}</span>
            <ul className={styles.genres}>
              {details.genres && details.genres.map((gen) => (
                <li key={gen}>{gen}</li>
                ))}
            </ul>
            <span className={styles.count}>{`👍 Like : ${details.like_count} `}</span>
            <span className={styles.count}>{`🤩 Rating : ${details.rating} `}</span>
            <span className={styles.count}>{`💲 Download : ${details.download_count} `}</span>
            <p>{details.description_full}</p>
          </div>
        </div>  
          )
      }
      </div>
    )
      
}

export default Detail;