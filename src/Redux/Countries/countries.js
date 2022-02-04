const ENDPOINT = 'https://api.covid19tracking.narrativa.com/api?date_from=2020-03-10&date_to=2020-03-10';
const FETCH_COUNTRIES = 'covidTracker/countries/FETCH_COUNTRIES';

const initialState = [];

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
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
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
