import React, { Component } from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';

class CountriesContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      error: null,
      isLoaded: false, 
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then(
      (res) => {
        this.setState({
          isLoaded: true,
          items: res
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.population}
            </li>
          ))}
        </ul>
      );
    }
  }
}

  // constructor
    // state (api)
    // props (countries)

export default CountriesContainer;