import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import favReducer from "./favs/fav.reducer";
import movieReducer from "./movie/movie.reducer";

const middleweres = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleweres.push(logger)
}

const rootReducer = combineReducers({
  movie: movieReducer,
  fav: favReducer
})

const store = createStore(rootReducer, applyMiddleware(...middleweres))

export default store;