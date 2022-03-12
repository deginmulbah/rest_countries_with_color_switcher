import React, { useState, useContext } from 'react';
import countriesContext from '../context/CountriesProvider';
import { FaSearch } from 'react-icons/fa'
function SearchCountry() {
  const { getCountriesByName } = useContext(countriesContext);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 4) {
      getCountriesByName(search)
      setSearch('')
      setError(false)
    } else {
      setError(true)
      setErrorMsg('Please Input 4 latters or above!')
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='search-input'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Search for a country...'
          value={search}
          onChange={handleChange}
          className={(error) ? "boarder-red" : ''}
        />
        <span className='error'>{error ? errorMsg : ''}</span>
        <FaSearch color={error ? 'red' : 'black'} className='input-icon' />
      </form>
    </div>
  )
}
export default SearchCountry