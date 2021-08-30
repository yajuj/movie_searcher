import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/movie/movie.actions';
import './header.styles.scss';

const Header = () => {

  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value)
  }

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCollectionsStartAsync(search.trim()))
  }

  return (
    <header>
      <div className='links'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/favorites'>
          Favorites
        </Link>
        <Link to='/contacts'>
          Contacts
        </Link>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input placeholder='Search...' className='input' type='text' value={search} onChange={handleChange} />
      </form>
    </header>
  )
}

export default Header