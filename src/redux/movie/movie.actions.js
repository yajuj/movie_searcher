import { MoviesActionTypes } from "./movie.actions-types";

export const URL = `https://api.themoviedb.org/3/`

export const API_KEY = 'api_key=1814490f1def367704b6d0daa9b9f5a2'

export const fetchCollectionsStart = () => ({
  type: MoviesActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsStartAsync = (query = '', page = 1) => async dispatch => {

  dispatch(fetchCollectionsStart());

  try {
    if (query) {
      const data = await fetch(`${URL}search/movie?&${API_KEY}&page=${page}&query=${query}`);
      const { results } = await data.json();

      dispatch(
        page !== 1 ?
          addCollectionsSuccess({ collections: results, filter: query })
          :
          fetchCollectionsSuccess({ collections: results, filter: query })
      );
    } else if (!query) {
      const data = await fetch(`${URL}discover/movie?&${API_KEY}&page=${page}`);
      const { results } = await data.json();
      dispatch(
        page !== 1 ?
          addCollectionsSuccess({ collections: results })
          :
          fetchCollectionsSuccess({ collections: results })
      );
    }
  } catch (error) {
    dispatch(fetchCollectionsFailure(error))
  }
}

export const fetchCollectionsSuccess = (payload) => ({
  type: MoviesActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload
})

export const addCollectionsSuccess = (payload) => ({
  type: MoviesActionTypes.ADD_COLLECTIONS_SUCCESS,
  payload
})

export const fetchCollectionsFailure = (payload) => ({
  type: MoviesActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload
})

export const setRecommendations = (payload) => ({
  type: MoviesActionTypes.SET_RECOMMENDATIONS,
  payload
})

export const fetchRecommendations = (id) => async dispatch => {
  try {
    const data = await fetch(`${URL}movie/${id}/recommendations?${API_KEY}&language=en-US&page=1`);
    const { results } = await data.json();
    dispatch(setRecommendations(results.slice(0, 10)))
  } catch (error) {
    console.log('err');
  }
}