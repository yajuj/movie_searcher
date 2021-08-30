import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../redux/favs/fav.actions';
import { addToLocalStorage, removeFromLocalStorage } from '../../redux/favs/fav.utils';
import './movie-card.styles.scss';

const MovieCard = ({ title, poster_path, vote_average, id, width }) => {
  const dispatch = useDispatch();

  const faves = useSelector(state => state.fav.collections)

  const toogleFavorites = () => {
    if (faves[id]) {
      removeFromLocalStorage(id)
      dispatch(removeFromFavorites(id))
    } else {
      addToLocalStorage({ title, poster_path, vote_average, id })
      dispatch(addToFavorites({ title, poster_path, vote_average, id, width }))
    }
  }

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
      >{vote_average.toFixed(1)}</span>

      <div className='toogle-faves'
        onClick={() => toogleFavorites()}
        style={{ color: `${faves[id] ? 'red' : 'white'}` }}
      >
        <i className="fas fa-heart"></i>
      </div>
    </div>

  )
}

export default MovieCard