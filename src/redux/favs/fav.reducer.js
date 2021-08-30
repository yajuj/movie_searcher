import { FavoritesActionTypes } from "./fav.actions.type"

const checkingLocalStorage = () => {
  return Object.assign({}, ...Object.entries(localStorage)
    .map(([key, value]) => ({ [key]: JSON.parse(value) })))
}

const INITIAL_STATE = {
  collections: checkingLocalStorage()
}

const favReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        collections: { ...state.collections, [action.payload.id]: action.payload }
      }
    case FavoritesActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        collections: Object.keys(state.collections)
          .filter(item => item !== action.payload.toString())
          .reduce((object, item) => ({ ...object, [item]: state.collections[item] }), {})
      }
    default:
      return state
  }
}

export default favReducer;