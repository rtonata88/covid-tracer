import { useSelector, useDispatch } from 'react-redux';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateHeader } from '../Redux/Countries/countries';
import worldMap from '../assets/world-map-vector.png';

const Header = ({ searchCountry }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const headerInfo = useSelector((state) => state.countryReducer.headerInfo);

  const redirectHandler = () => {
    const headerInfo = {
      title: 'COUNTRY INFECTIONS',
      heading: 'COUNTRY INFECTIONS',
      infections: '787,877 infections',
      selectedCountry: '',
      map: worldMap,
    };

    dispatch(updateHeader(headerInfo));
  };
  let backgroundImage = {};
  let filterContainer;
  if (location.pathname !== '/') {
    backgroundImage = {
      backgroundImage: `url(${headerInfo.map})`,
      backgroundSize: 'cover',
      backgroundColor: '#ec4f90',
    };

    filterContainer = (
      <small>
        <strong>CONFIRMED CASES BY COUNTRY</strong>
      </small>
    );
  } else {
    backgroundImage = {
      backgroundImage: `url(${headerInfo.map})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#ec4f90',
    };

    filterContainer = (
      <input
        type="text"
        onChange={searchCountry}
        className="form-control search-input"
        placeholder="Search..."
      />
    );
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="app-header border-bottom border-danger px-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              {location.pathname !== '/' ? (
                <Link to="/" className="back-link" onClick={redirectHandler}>
                  Back
                </Link>
              ) : (
                ''
              )}
            </div>
            <div>
              {' '}
              <strong>{headerInfo.title}</strong>
            </div>
            <div>
              <BiMicrophone />
              <BiCog />
            </div>
          </div>
          <div className="bg-pink d-flex justify-content-center text-white cover-page">
            <div className="col-6 opacity-50" style={backgroundImage} />
            <div className="col-6 my-auto py-2 px-2">
              <strong>{headerInfo.heading}</strong>
              <p>
                <small>{headerInfo.infections}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex bg-pink-2 text-white py-1 px-1 text-sm smaller">
          {filterContainer}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  searchCountry: PropTypes.func.isRequired,
};

export default Header;
