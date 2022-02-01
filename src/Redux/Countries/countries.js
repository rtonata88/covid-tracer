const ENDPOINT =
  'https://api.covid19tracking.narrativa.com/api?date_from=2020-03-10&date_to=2020-03-10';
const FETCH_COUNTRIES = 'covidTracker/countries/FETCH_COUNTRIES';

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
  countryData.then((data) =>
    Object.entries(data.dates).map((dates) => {
      dates.map((countries, index) => {
        if (index > 0) {
          dispatch(fetchCountries(countries));
        }
      });
    })
  );
};

const reducer = (state = initialState, action) => {
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
