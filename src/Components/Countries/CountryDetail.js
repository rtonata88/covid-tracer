import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCases from './CountryCases';

const CountryDetail = () => {
  const { countryId } = useParams();

  const countryData = useSelector((state) => {
    const { countries } = state.countryReducer;
    return countries.find((country) => country.id === countryId);
  });

  return <>{countryData && <CountryCases country={countryData} />}</>;
};

export default CountryDetail;
