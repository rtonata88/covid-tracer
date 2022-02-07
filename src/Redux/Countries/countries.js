import worldMap from '../../assets/world-map-vector.png';

const ENDPOINT = 'https://api.covid19tracking.narrativa.com/api?date_from=2020-03-10&date_to=2020-03-10';
const FETCH_COUNTRIES = 'covidTracker/countries/FETCH_COUNTRIES';
const UPDATE_HEADER_INFO = 'covidTracker/UPDATE_HEADER_INFO';

const initialState = {
  countries: [],
  headerInfo: {
    title: 'COUNTRY INFECTIONS',
    heading: 'COUNTRY INFECTIONS',
    infections: '787,877 infections',
    map: worldMap,
  },
};

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const updateHeader = (payload) => ({
  type: UPDATE_HEADER_INFO,
  payload,
});

export const fetchCountriesDataFromApi = async () => {
  const response = await fetch(ENDPOINT).then((res) => res.json());
  return response;
};

export const fetchCountriesData = () => async (dispatch) => {
  const countryData = await fetchCountriesDataFromApi();
  const { countries } = countryData.dates['2020-03-10'];
  dispatch(fetchCountries(Object.values(countries)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case UPDATE_HEADER_INFO: {
      return {
        ...state,
        headerInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
