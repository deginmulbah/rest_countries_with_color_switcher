import React from 'react'
import PropTypes from 'prop-types'

export default function info1({ country }) {
    return (
        <div className='info-items'>
            <p>Offical Name: <span>{country.name.official}</span></p>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Sub Region: <span>{country.subregion}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
        </div>
    )
}

info1.propTypes = {
    country: PropTypes.object.isRequired
}