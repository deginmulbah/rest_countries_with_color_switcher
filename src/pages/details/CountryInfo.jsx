import React from 'react';
import Info1 from './Info1';
import Info2 from './Info2';
// import BorderCountries from './BorderCountries';

export default function CountryInfo({ country }) {
    return (
        <div className='mt-4'>
            <div className='country-details'>
                <div className='country-flag details'>
                    <img src={country.flags.png} alt={country.name.common} />
                </div>
                <div className='country-info details mt-2'>
                    <h2 className='country-name'>{country.name.common}</h2>
                    <div className="info p-3 mt-2">
                        <Info1 country={country} />
                        <Info2 country={country} />
                    </div>
                </div>
            </div>
        </div>
    )
}


