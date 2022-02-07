import PropTypes from 'prop-types';

const CountryCases = ({ country }) => {
  const cases = {
    todayConfirmed: country.today_confirmed,
    todayDeath: country.today_deaths,
    todayNewConfirmed: country.today_new_confirmed,
    todayNewDeaths: country.today_new_deaths,
    todayNewOpenCases: country.today_new_open_cases,
    todayNewRecovered: country.today_new_recovered,
    todayOpenCases: country.today_open_cases,
    todayRecovered: country.today_recovered,
    yesterdayDeaths: country.yesterday_deaths,
    yesterdayOpenCases: country.yesterday_open_cases,
    yesterdayRecovered: country.yesterday_recovered,
  };

  return (
    <div className="d-flex flex-column justify-content-between w-100">
      <div className="bg-pink-1 country-cases">
        <span>Today Confirmed</span>
        {' '}
        <div>{cases.todayConfirmed}</div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-2 country-cases">
          Today Deaths
          {' '}
          <div>{cases.todayDeath}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-1 country-cases">
          Today New Confirmed
          {' '}
          <div>{cases.todayNewConfirmed}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-2 country-cases">
          Today Confirmed
          {' '}
          <div>{cases.todayConfirmed}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-1 country-cases">
          Today New Deaths
          {' '}
          <div>{cases.todayNewDeaths}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-2 country-cases">
          Today new open cases
          {' '}
          <div>{cases.todayNewOpenCases}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <div className="bg-pink-1 country-cases">
          Recoveries
          {' '}
          <div>{cases.todayNewRecovered}</div>
        </div>
      </div>
    </div>
  );
};

CountryCases.propTypes = {
  country: PropTypes.shape({
    today_confirmed: PropTypes.number.isRequired,
    today_deaths: PropTypes.number.isRequired,
    today_new_confirmed: PropTypes.number.isRequired,
    today_new_deaths: PropTypes.number.isRequired,
    today_new_open_cases: PropTypes.number.isRequired,
    today_new_recovered: PropTypes.number.isRequired,
    today_open_cases: PropTypes.number.isRequired,
    today_recovered: PropTypes.number.isRequired,
    yesterday_deaths: PropTypes.number.isRequired,
    yesterday_open_cases: PropTypes.number.isRequired,
    yesterday_recovered: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryCases;
