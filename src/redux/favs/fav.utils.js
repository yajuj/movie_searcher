export const addToLocalStorage = (movie) => {
  const movieItem = JSON.stringify(movie)
  localStorage.setItem(movie.id, movieItem);
}
export const removeFromLocalStorage = (id) => {
  localStorage.removeItem(id);
}