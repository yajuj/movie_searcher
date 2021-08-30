import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './componnents/header/header';
import './index.css';
import Contacts from './pages/contacts-page/contacts';
import FavoritesPage from './pages/fav-page/favorites-page';
import MainPage from './pages/main-page/main-page';
import MoviePage from './pages/movie-page/movie';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/movie/:id' component={MoviePage} />
        <Route path='/favorites' component={FavoritesPage} />
        <Route path='/contacts' component={Contacts} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);