
import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import "./Countries.css";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data =>
                setCountries(data)
            )
    }, [])
    return (
        <div className='countries'>
            {countries.map((country) => {
                return <Country flagLink={country.flags.png} countryName={country.name.common} population={country.population} />
            })}
        </div>
    )
}
export default Countries;
