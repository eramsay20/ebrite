import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchEvents } from '../../store/events';

import * as sessionActions from '../../store/session';

function SearchForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // form input states
  const [query, setQuery] = useState('');

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchEvents(query));
    history.push('/events/search')
  }

  const SEARCH = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/search-icon.png?raw=true`

  return (
    <div>
      <form className={`search-bar`} onSubmit={handleSubmit}>
      <img className={`search-image`} src={SEARCH}></img>
          <input
            className={`search-bar`}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
      </form>
    </div>
  );
}

export default SearchForm;
