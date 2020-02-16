import React from 'react';
import CityWeather from './CityWeather';
import cityIdArray from '../cityId';
import CityForecasts from './CityForecasts';

const AllCities = () => {
  return (
    <>
      {cityIdArray.map(cityId => {
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
