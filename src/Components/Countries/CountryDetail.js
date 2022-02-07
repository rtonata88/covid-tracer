import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCases from './CountryCases';

const CountryDetail = () => {
  const { countryId } = useParams();

  /* eslint-disable  max-len */
  const countryData = useSelector((state) => state.countryReducer.countries.find((country) => country.id === countryId));

  return <>{countryData && <CountryCases country={countryData} />}</>;
};

export default CountryDetail;
