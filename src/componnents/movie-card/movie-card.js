import React from 'react';
import { Link } from 'react-router-dom';
import FavesButton from '../faves-button/faves-button';
import './movie-card.styles.scss';

const MovieCard = ({ title, poster_path, vote_average, id, width }) => {

  return (
    
    <div className='movie-card' style={{ width }}>
      <Link to={`/movie/${id}`}>
        <div className='image-container'>
          {poster_path ?
            (<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title + ' poster image'} />)
            :
            (<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU' alt='there is no poster' />)
          }
          <div className='title'>{title}</div>
        </div>
      </Link>
      <span
        className='vote-overage'
        style={{ backgroundColor: vote_average > 7 ? 'green' : vote_average < 5 ? 'red' : '#ebc700' }}
      >
        {vote_average.toFixed(1)}
      </span>

      <FavesButton {...{ title, poster_path, vote_average, id }} />
    </div>

  )
}

export default MovieCard