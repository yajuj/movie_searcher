import { FavoritesActionTypes } from "./fav.actions.type"

export const addToFavorites = (payload) => ({
  type: FavoritesActionTypes.ADD_TO_FAVORITES,
  payload
})

export const removeFromFavorites = (payload) => ({
  type: FavoritesActionTypes.REMOVE_FROM_FAVORITES,
  payload
})
