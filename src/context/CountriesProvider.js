import React, { useEffect, useState } from 'react';

const countriesContext = React.createContext()
export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    const response = await fetch('/all');
    const data = await response.json()
    setCountries(data)
    setLoading(false)
  }

  const getCountriesByRegion = async (region) => {
    setLoading(true)
    const response = await fetch(`/region/${region}`);
    const data = await response.json()
    setCountries(data)
    setLoading(false)
  }

  const getCountriesByName = async (name) => {
    setLoading(true)
    const response = await fetch(`name/${name}`);
    const data = await response.json()
    setCountries(data)
    setLoading(false)
  }

  return (
    <countriesContext.Provider value={{ countries, isLoading, getCountriesByRegion, getCountriesByName }}>
      {children}
    </countriesContext.Provider>
  )
}

export default countriesContext