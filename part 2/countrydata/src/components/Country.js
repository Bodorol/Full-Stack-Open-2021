import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    if ('name' in country) {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(language => <li key={language["iso639_1"]}>{language.name}</li>)}
                </ul>
                <img src={country.flag} width="200px" alt={`Flag of ${country.name}`} />
                <Weather capital={country.capital} />
            </div>
        );
    } else {
        return null;
    }
}

export default Country