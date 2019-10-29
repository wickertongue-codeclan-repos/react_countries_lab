import React, { Component } from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';

class CountriesContainer extends Component {
render() {
  return (
    <div>
      <h2>CountriesContainer</h2>
      <CountriesList />
      <CountryDetail />
    </div>
    
    )
}



  // constructor
    // state (api)
    // props (countries)
}

export default CountriesContainer;