import countryReducer from './Redux/Countries/countries';

test('Should load countries to the state', () => {
  const previousState = {
    countries: [],
  };
  const mockCountries = [
    {
      id: 1,
      name: 'Afghanistan',
      todayConfirmed: 4,
      todayDeath: 5,
      todayNewConfirmed: 6,
      todayNewDeaths: 1,
      todayNewOpenCases: 0,
      todayNewRecovered: 10,
      todayOpenCases: 7,
      todayRecovered: 6,
      yesterdayDeaths: 3,
      yesterdayOpenCases: 9,
      yesterdayRecovered: 5,
    },
    {
      id: 1,
      name: 'Angola',
      todayConfirmed: 4,
      todayDeath: 5,
      todayNewConfirmed: 6,
      todayNewDeaths: 1,
      todayNewOpenCases: 0,
      todayNewRecovered: 10,
      todayOpenCases: 7,
      todayRecovered: 6,
      yesterdayDeaths: 3,
      yesterdayOpenCases: 9,
      yesterdayRecovered: 5,
    },
  ];

  expect(
    countryReducer(previousState, {
      type: 'covidTracker/countries/FETCH_COUNTRIES',
      payload: mockCountries,
    }),
  ).toEqual({
    countries: [
      {
        id: 1,
        name: 'Afghanistan',
        todayConfirmed: 4,
        todayDeath: 5,
        todayNewConfirmed: 6,
        todayNewDeaths: 1,
        todayNewOpenCases: 0,
        todayNewRecovered: 10,
        todayOpenCases: 7,
        todayRecovered: 6,
        yesterdayDeaths: 3,
        yesterdayOpenCases: 9,
        yesterdayRecovered: 5,
      },
      {
        id: 1,
        name: 'Angola',
        todayConfirmed: 4,
        todayDeath: 5,
        todayNewConfirmed: 6,
        todayNewDeaths: 1,
        todayNewOpenCases: 0,
        todayNewRecovered: 10,
        todayOpenCases: 7,
        todayRecovered: 6,
        yesterdayDeaths: 3,
        yesterdayOpenCases: 9,
        yesterdayRecovered: 5,
      },
    ],
  });
});
