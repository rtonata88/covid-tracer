import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { updateHeader } from '../../Redux/Countries/countries';
import useImage from '../../useImage';

const Country = ({ country, index }) => {
  const dispatch = useDispatch();
  const { image } = useImage(country.name, 128);

  const backgroundImage = {
    backgroundImage: `url(${image})`,
    backgroundSizen: 'cover',
  };

  const redirectHandler = () => {
    const headerInfo = {
      title: country.name,
      heading: country.name,
      infections: `${country.today_confirmed} CASES`,
      selectedCountry: country.name,
      map: image,
    };
    dispatch(updateHeader(headerInfo));
  };

  return (
    <div
      className={`${
        (index + 1) % 4 >= 2 ? 'bg-pink' : 'bg-pink-1'
      } col-sm-6 country-container`}
      style={backgroundImage}
    >
      <Link
        to={`/${country.id}`}
        onClick={redirectHandler}
        className="country-block"
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
    </div>
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
