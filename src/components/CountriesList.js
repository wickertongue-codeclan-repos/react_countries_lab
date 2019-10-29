import React, {Component} from 'react';

class CountriesList extends Component {
  render() {
    const countryNames = this.props.data.map(country => {
      return (
        <option value={country}>{country.name}</option>
      );
    });

    return (
      <div className="countries-list">
        <p>This it Countries List</p>
        <select>
          {countryNames}
        </select>
      </div>
    )
  }
}

export default CountriesList;


// api .name in dropdown