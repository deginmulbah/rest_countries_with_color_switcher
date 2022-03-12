import React, { useState, useContext } from 'react'
import countriesContext from '../context/CountriesProvider';

function FliterCountries() {
  const { getCountriesByRegion } = useContext(countriesContext)
  const [region, setRegion] = useState();

  const handleChange = (e) => {
    const region = e.target.value
    getCountriesByRegion(region);
    setRegion(region)
  }

  return (
    <div className="fliterCountry">
      <select value={region} onChange={handleChange}>
        <option disabled>Fliter by region</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="asia">Asia</option>
        <option value="americas">Americas</option>
      </select>
    </div>
  )
}

export default FliterCountries