import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  componentDidMount = () => {
    // const axios = require('axios')
    // axios.get('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => {
    //     this.setState({
    //       gifs: response.data.data
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    const axios = require('axios');
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=FEymU58SVajyk3yBGRV0lPmjhTNn9j2q`)
      .then( response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
