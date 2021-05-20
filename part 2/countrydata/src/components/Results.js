import React, { useEffect } from 'react'


const Results = ({countries, currentCountry, setCountry}) => {
    let content = '';

    useEffect(() => {
        if (countries.length === 1 && countries[0] !== currentCountry) {
            setCountry(countries[0]);
            return null;
        }
    }, [countries, currentCountry, setCountry]);

    if (countries.length > 10) {
        content = "Too many matches, try a more specific filter";
    } else if (countries.length > 1) {
        content = countries.map(country => 
                <p key={country.numericCode}>{country.name} <button onClick={() => setCountry(country)}>Show</button></p>);
    } else if (countries.length === 0) {
        content = "No countries matching search.";
    }
    return (
        <div>
            {content}
        </div>
    );
}

export default Results;