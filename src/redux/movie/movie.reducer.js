import { MoviesActionTypes } from "./movie.actions-types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  filter: '',
  recommendations: [],
  err: undefined,
}

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case MoviesActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload.collections,
        isFetching: false,
        filter: action.payload.filter
      }
    case MoviesActionTypes.ADD_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: [...state.collections, ...action.payload.collections],
        isFetching: false,
        filter: action.payload.filter
      }
    case MoviesActionTypes.SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      }
    case MoviesActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      }
    default:
      return state;
  }
}

export default movieReducer;