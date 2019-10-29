import React, {Component} from 'react';
import CountriesContainer from './containers/CountriesContainer';
import './App.css';

class App extends Component {
  
  fetchDog = function(){
  const request = fetch("https://dog.ceo/api/breeds/image/random")//NEW
  console.log(request);
}
  
  
  render() {
    return <CountriesContainer />
  }
}

export default App;