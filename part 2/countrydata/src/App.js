import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './components/Results'
import Country from './components/Country'

function App() {
  const [ search, setSearch ] = useState('');
  const [ countryData, setCountryData ] = useState([]);
  const [ currentCountry, setCurrentCountry ] = useState({});

  const handleSearchChange = event => {
    setCurrentCountry({});
    setSearch(event.target.value);
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
          .then(response => setCountryData(response.data));
  }, []);

  const filteredCountries = countryData.filter(country => country.name
                                                            .toLowerCase()
                                                            .includes(search.toLowerCase()));

  return (
    <div>
      <h1>Find Countries</h1>
      <input value={search} onChange={handleSearchChange} />
      <Results countries={filteredCountries} currentCountry={currentCountry} setCountry={setCurrentCountry} />
      <Country country={currentCountry} />
    </div>
  );
}

export default App;
