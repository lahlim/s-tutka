import React from 'react';
import CityWeather from './CityWeather';
import cityIdArray from '../cityId';
import CityForecasts from './CityForecasts';

const AllCities = ({ filter, loading, setLoading }) => {
  let citysToShow = cityIdArray.filter(id => id === Number(filter));
  if (Number(filter) === 0) citysToShow = cityIdArray;

  return (
    <>
      {citysToShow.map(cityId => {
        return (
          <div className="mb-4" key={cityId}>
            <CityWeather id={cityId} />
            <CityForecasts id={cityId} />
          </div>
        );
      })}
    </>
  );
};

export default AllCities;
