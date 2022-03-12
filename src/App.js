import Header from './compoents/Header';
import Countries from './compoents/Countries'
import CountryDetails from './pages/details/CountryDetails';
import Container from './compoents/general/Container';
import SearchCountry from './compoents/SearchCountry';
import FliterCountries from './compoents/FliterCountries';
import { CountriesProvider } from './context/CountriesProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Header />
        <Container >
          <Routes>
            <Route path="/" element={
              <>
                <div className="search-fliter">
                  <SearchCountry />
                  <FliterCountries />
                </div>
                <Countries />
              </>}>
            </Route>
            <Route path='country/:name' element={<CountryDetails />} />
          </Routes>
        </Container>
      </Router>
    </CountriesProvider>
  );
}
export default App
