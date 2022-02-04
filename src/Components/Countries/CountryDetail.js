import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryDetail = () => {
  const { countryId } = useParams();

  /* eslint-disable  max-len */
  const countryData = useSelector((state) => state.countryReducer.find((country) => country.id === countryId));

  return (
    <>
      {countryData && (
        <div className="row">
          <div className="list-group">
            <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
              <div className="d-flex gap-2 w-100 justify-content-between">
                <p>{countryData.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetail;
