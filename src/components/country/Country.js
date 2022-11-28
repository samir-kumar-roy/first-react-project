import "./Country.css";
import React from 'react';

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flagLink} alt="flag" className='flag' />
            <p className='country-name'>Country Name: <span>{props.countryName}</span></p>
            <p className='population'>Populatin: <span>{props.population}</span></p>
        </div>
    )
}

export default Country;