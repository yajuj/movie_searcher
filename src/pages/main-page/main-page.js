import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../componnents/movie-card/movie-card';
import { fetchCollectionsStartAsync } from '../../redux/movie/movie.actions';
import './main-page.styles.scss';


const MainPage = () => {

  const movies = useSelector(state => state.movie.collections);
  const filter = useSelector(state => state.movie.filter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page != 1) {
      dispatch(fetchCollectionsStartAsync(filter, page))

    }
  }, [page])

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchCollectionsStartAsync())
    }
    document.addEventListener('scroll', scrollHandler)
    return () => { document.removeEventListener('scroll', scrollHandler); console.log('unsuv'); }
  }, [])

  const scrollHandler = (e) => {
    if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)) < 100) {
      setPage(page => page + 1)
    }
  }

  return (
    <div className='main-page'>
      {movies.map(movie => <MovieCard key={movie.id} {...movie} width='300px' />)}
    </div>
  )
}

export default MainPage;