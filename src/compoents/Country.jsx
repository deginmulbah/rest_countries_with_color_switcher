import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function Country({ country }) {
  return (
    <div className='country-card'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className='country-card-top'>
          <Link to={`country/${country.name.common}`}>
            <img src={country.flags.png} className="card-img" alt={country.name.common} />
          </Link>
        </div>
        <div className='card-content'>
          <h3 className='card-heading'>{country.name.common}</h3>
          <div className='card-details'>
            <p className='text-bold'>Population <span>{country.population}</span></p>
            <p className='text-bold'>Region <span>{country.region}</span></p>
            <p className='text-bold'>Capital <span>{country.capital}</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.object.isRequired
}

export default Country