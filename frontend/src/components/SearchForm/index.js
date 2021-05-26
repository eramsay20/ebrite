import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchEvents } from '../../store/events';

function SearchForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const SEARCH = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/search-icon.png?raw=true`

  // form input states
  const [query, setQuery] = useState('');

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchEvents(query));
    history.push('/events/search')
  }

  return (
    <div>
      <form className={`search-bar-form`} onSubmit={handleSubmit}>
          <img className={`search-image`} alt={`mag-glass`} src={SEARCH}></img>
          <input
            className={`search-bar-input`}
            type="text"
            value={query}
            placeholder='Search events'
            onChange={(e) => setQuery(e.target.value)}
            required
          />
      </form>
    </div>
  );
}

export default SearchForm;
