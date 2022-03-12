import React, { useContext } from 'react';
import BackBtn from '../../compoents/general/BackBtn';
import { useParams } from 'react-router-dom';
import countriesContext from '../../context/CountriesProvider';
import CountryInfo from './CountryInfo';

function CountryDetails() {
  const { name } = useParams();
  const { countries } = useContext(countriesContext)
  let country = [];

  getCountryDetails();

  function getCountryDetails() {
    country = countries.filter((country) =>
      country.name.common === name
    )
  }


  return (
    <div className='mt-4'>
      <BackBtn />
      {
        !country.length ? null : country.map((data , i) => <CountryInfo country={data} key={i} />)
      }
    </div>
  )
}

export default CountryDetails