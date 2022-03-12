import Country from './Country';
import { useContext } from 'react';
import countriesContext from '../context/CountriesProvider';
import Spinner from './general/Spinner';

function Countries() {
  const { countries, isLoading } = useContext(countriesContext);

  return (
    isLoading ? <Spinner /> : <div className='countries-listen'>
      {countries.map((country, i) => {
        return (
          <Country key={i} country={country} />
        )
      })}
    </div>
  )
}

export default Countries