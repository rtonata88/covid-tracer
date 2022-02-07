import { useSelector, useDispatch } from 'react-redux';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import { useLocation, Link } from 'react-router-dom';
import { updateHeader } from '../Redux/Countries/countries';
import worldMap from '../assets/world-map-vector.png';

const Header = () => {
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
  if (location.pathname !== '/') {
    // const { image } = '';
    backgroundImage = {
      backgroundImage: `url(${headerInfo.map})`,
      backgroundSize: 'cover',
      backgroundColor: '#ec4f90',
    };
  } else {
    backgroundImage = {
      backgroundImage: `url(${headerInfo.map})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#ec4f90',
    };
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
          <small>
            <strong>CONFIRMED CASES BY COUNTRY</strong>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Header;
