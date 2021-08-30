import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Recommendations from '../../componnents/recomendations/recommendations';
import { addToFavorites, removeFromFavorites } from '../../redux/favs/fav.actions';
import { addToLocalStorage, removeFromLocalStorage } from '../../redux/favs/fav.utils';
import { API_KEY, URL } from '../../redux/movie/movie.actions';
import './movie.styles.scss';

const MoviePage = () => {
  const { id } = useParams();
  const faves = useSelector(state => state.fav.collections);
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();
  const { title, backdrop_path, overview, vote_average, poster_path } = movie;

  const fetchMovie = async () => {
    const data = await fetch(`${URL}movie/${id}?${API_KEY}&language=en-US`).then(data => data.json());
    setMovie(data)
  }

  const toogleFavorites = () => {
    if (faves[id]) {
      removeFromLocalStorage(id)
      dispatch(removeFromFavorites(id))
    } else {
      addToLocalStorage({ title, poster_path, vote_average, id })
      dispatch(addToFavorites({ title, poster_path, vote_average, id }))
    }
  }

  useEffect(() => {
    fetchMovie()
    window.scrollTo(0, 80)
  }, [id])

  return (
    <div>
      <div className='movie-page' style={{
        backgroundImage: `linear-gradient( #22254b, rgba(0, 0, 0, 0.7) ), url(https://image.tmdb.org/t/p/original${backdrop_path})`
      }}>
        <div className='movie-page__content'>
          <div className='poster-container'>
            <span style={{ backgroundColor: vote_average > 7 ? 'green' : vote_average < 5 ? 'red' : '#ebc700' }} className='vote-average'>{vote_average}</span>
            {poster_path ?
              (<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title + ' poster image'} width='300px' />)
              :
              (<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU' alt='there is no poster' width='300px' />)
            }
            <div className='toogle-faves'
              onClick={() => toogleFavorites()}
              style={{ color: `${faves[id] ? 'red' : 'white'}` }}
            >
              <i className="fas fa-heart"></i>
            </div>
          </div>
          <div className='overview'>
            <h2>{title}</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
      <Recommendations />
    </div>
  )
}

export default MoviePage;