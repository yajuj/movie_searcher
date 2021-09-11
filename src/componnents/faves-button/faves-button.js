import React, { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favs/fav.actions";

const FavesButton = ({ title, poster_path, vote_average, id, width }) => {
  const dispatch = useDispatch();

  const faves = useSelector(state => state.fav.collections);

  const addToLocalStorage = (movie) => {
    const movieItem = JSON.stringify(movie)
    localStorage.setItem(movie.id, movieItem);
  }

  const removeFromLocalStorage = (id) => {
    localStorage.removeItem(id);
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

  return (
    <div className='toogle-faves'
      onClick={() => toogleFavorites()}
      style={{ color: `${faves[id] ? 'red' : 'white'}` }}
    >
      <i className="fas fa-heart"></i>
    </div>
  )
}

export default FavesButton
