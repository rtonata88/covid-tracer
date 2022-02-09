import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCountriesData, searchCountry } from './Redux/Countries/countries';
import Country from './Components/Countries/Country';
import CountryDetail from './Components/Countries/CountryDetail';
import Header from './Components/Header';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  const countriesSelector = useSelector(
    (state) => state.countryReducer.countries,
  );

  const searchedCountriesSelector = useSelector(
    (state) => state.countryReducer.searchedCountries,
  );

  const searchCountryInput = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchCountry(searchTerm.toLowerCase().trim()));
  };

  const countriesToBeDisplayed = searchedCountriesSelector.length === 0
    ? countriesSelector
    : searchedCountriesSelector;

  const countryData = countriesToBeDisplayed.map((country, index) => (
    <Country key={country.id} index={index} country={country} />
  ));

  return (
    <div className="container">
      <div className="sticky-top overflow-auto bg-light shadow-sm mx-auto my-5 phone-style">
        <Header searchCountry={searchCountryInput} />
        <div className="row">
          <Routes>
            <Route path="/" element={countryData} />
            <Route path="/:countryId" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
