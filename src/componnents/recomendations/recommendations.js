import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchRecommendations } from "../../redux/movie/movie.actions";
import MovieCard from "../movie-card/movie-card";
import './recommendations.styles.scss';

const Recommendations = () => {
  const recommendations = useSelector(state => state.movie.recommendations)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchRecommendations(id))
  }, [id])

  return (
    <div className='recommendations-wrapper'>
      <h2>Recommendations</h2>
      <div className='recommendations'>
        {recommendations.map(movie => <MovieCard key={movie.id} {...movie} width='230px' />)}
      </div>
    </div>
  )
}

export default Recommendations;
