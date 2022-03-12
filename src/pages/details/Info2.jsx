import React from 'react'
import PropTypes from 'prop-types'

export default function Info2({ country }) {
    
    const getObjValue = (obj) => {
        let objVal = '';
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                if(obj[i].name){ 
                    objVal += `${obj[i].name + ' '}`
                }

                if(!obj[i].name){ 
                   objVal += `${obj[i] + ' '}`
                }
            }
        }
        return objVal
    }
    

    return (
        <div className='info-items'>
            <p>Currencies:  <span>{getObjValue(country.currencies)}</span></p>
            <p>Languages: <span>{getObjValue(country.languages)}</span></p>
        </div>
    )
}

Info2.propTypes = {
    country: PropTypes.object.isRequired
}