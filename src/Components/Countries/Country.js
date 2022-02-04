import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <Link to={`/country/${country.id}`}>
    <div className="col-sm-6 padding-0">
      <div className="list-group">
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <small className="opacity-50 text-nowrap text-right">
              <BsArrowRightCircle />
            </small>
            <p key={country.id}>
              {country.name}
              {' '}
              {country.today_confirmed}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

Country.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
