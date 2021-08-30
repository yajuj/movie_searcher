import React from "react"
import { useSelector } from "react-redux"
import MovieCard from "../../componnents/movie-card/movie-card"
import './favorites.styles.scss'

export const FavoritesPage = () => {
  const movies = useSelector(state => state.fav.collections)
  return (
    <div className='favorites'>
      {
        Object.keys(movies).map(movie => <MovieCard key={movie} {...movies[movie]} width='300px' />)
      }
    </div>
  )
}

export default FavoritesPage;
