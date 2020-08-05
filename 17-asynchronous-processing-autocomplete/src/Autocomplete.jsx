import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      countries: [],
    };
  }

  handleInput = async (e) => {
    const { target: { value } } = e;

    if (!value) {
      this.setState({
        inputText: '',
        countries: [],
      });

      return;
    }

    this.setState({
      inputText: value,
    });

    try {
      const filteredCountries = await axios.get('/countries', {
        params: {
          term: value,
        },
        // baseURL: 'http://localhost:8080', // my local setting, for hexlet have to remove
      });
  
      this.setState({
        countries: filteredCountries.data,
      });
    } catch (e
      ) {
      return Error(e);
    }
  };

  renderCountries() {
    const { countries } = this.state;
    if (countries.length === 0) {
      return null;
    }

    return (
      <ul>
        {countries.map((country) => <li key={country}>{country}</li>)}
      </ul>
    );
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <form>
          <div className="form-group">
            <input onChange={this.handleInput} value={inputText} type="text" className="form-control" placeholder="Enter Country" />
          </div>
        </form>
        {this.renderCountries()}
      </div>
    );
  }
}
// END


// baseURL: 'http://localhost:8080', // my local setting, for hexlet have to remove