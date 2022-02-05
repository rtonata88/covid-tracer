import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useImage from '../../useImage';

const Country = ({ country, index }) => {
  const { image } = useImage(country.name);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSizen: 'cover',
  };

  return (
    <Link
      to={`/country/${country.id}`}
      className={`${
        (index + 1) % 4 >= 2 ? 'bg-pink' : 'bg-pink-1'
      } col-sm-6 country-block`}
      style={styles}
    >
      <div>
        <BsArrowRightCircle />
      </div>
      <div className="country-name">
        {country.name}
        <p key={country.id}>
          <small>{country.today_confirmed}</small>
        </p>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
