import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import { FaLessThan } from 'react-icons/fa';
import { fetchCountriesData } from './Redux/Countries/countries';
import Country from './Components/Countries/Country';
import CountryDetail from './Components/Countries/CountryDetail';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  const countriesSelector = useSelector((state) => state.countryReducer);
  // console.log(countriesSelector);
  const countryData = countriesSelector.map((country, index) => (
    <Country key={country.id} index={index} country={country} />
  ));

  return (
    <div className="container">
      <div className="sticky-top overflow-auto bg-light shadow-sm mx-auto my-5 phone-style">
        <div className="d-flex flex-wrap justify-content-center app-header border-bottom border-danger">
          <div className="d-flex align-items-center justify-content-between col-md-3 mb-md-0 text-dark text-decoration-none">
            <small className="text-white">
              <strong>
                <FaLessThan />
                COVID-19
              </strong>
            </small>
          </div>
          <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 smaller">
            <small>
              <strong>COUNTRY INFECTIONS</strong>
            </small>
          </div>
          <div className="col-md-3 text-end">
            <BiMicrophone />
            <BiCog />
          </div>
        </div>
        <div className="py-1 px-1 h-25 bg-pink d-flex justify-content-center text-white">
          <div className="col-6 map-container opacity-50" />
          <div className="col-6 my-auto">
            <strong>WORLD TOTAL</strong>
            <p>
              <small>787,877 infections</small>
            </p>
          </div>
        </div>
        <div className="bg-pink-2 text-white py-1 px-1 text-sm smaller">
          <small>
            <strong>CONFIRMED CASES BY COUNTRY</strong>
          </small>
        </div>
        <div className="row">
          <Routes>
            <Route path="/" element={countryData} />
            <Route path="/country/:countryId" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
