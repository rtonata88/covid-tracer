import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Country from './Components/Countries/Country';

const countries = [
  {
    id: 'afghanistan',
    name: 'Afghanistan',
    today_confirmed: 4,
  },
  {
    id: 'angola',
    name: 'Angola',
    today_confirmed: 4,
  },
];

const initialState = { countries: [] };
const mockStore = configureStore();
let store;

it('renders correctly', () => {
  store = mockStore(initialState);

  const countryData = countries.map((country, index) => (
    <Provider store={store} key={country.id}>
      <Country key={country.id} index={index} country={country} />
    </Provider>
  ));

  const tree = renderer.create(countryData).toJSON();
  expect(tree).toMatchSnapshot();
});
