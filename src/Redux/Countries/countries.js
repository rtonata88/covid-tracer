const ENDPOINT =
  'https://api.covid19tracking.narrativa.com/api?date_from=2020-03-10&date_to=2020-03-10';
const FETCH_COUNTRIES = 'spaceTraveler/rockets/FETCH_COUNTRIES';

const initialState = [];

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const fetchCountriesDataFromApi = async () => {
  const response = await fetch(ENDPOINT);
  const countries = await response.json();
  return countries;
};

export const fetchCountriesData = () => async (dispatch) => {
  const countryData = fetchCountriesDataFromApi();
  countryData
    .then(dates)
    .then(date)
    .then((countries) => {
      dispatch(loadRockets(countries));
    });
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
