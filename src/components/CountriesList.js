import React, {Component} from 'react';

class CountriesList extends Component {
  
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value})
  }
  
  render() {
    const countryNames = this.props.data.map(country => {
      return (
        <option 
          value={country}
          onChange={this.handleChange}>
        {country.name}
        </option>
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