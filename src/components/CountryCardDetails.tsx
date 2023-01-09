import React from "react";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { CountryPropsInterface } from "./CountryCard.js";
import { CountriesInterface } from "./CountriesList.js";


const CountryCardDetails : React.FunctionComponent<CountryPropsInterface> = ({country})=>{
    
    const altImg = `Country Flag of ${country.name.common}`
    const populationString = country.population.toLocaleString("en-US")
    const countries = useSelector((state:CountriesInterface)=>state.countries.data)
    const currencies =country.currencies[Object.keys(country.currencies)[0]].name
    const borderCountry = ()=>{
        if (country.borders && country.borders.length >0){
            return country.borders.map((cca3:string)=>{
            if (countries && Array.isArray(countries)) {
                const foundCountry = countries.find((country:CountryPropsInterface["country"])=>country.cca3===cca3);
                if (foundCountry) {
                    const country:CountryPropsInterface["country"] = foundCountry;
                    return country.name.common;
                }
                }
                return "no country found"
            })
        }
        return ["no borders"]
     }   

    const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
    return (
        <figure>
            <img src={country.flags.png} alt={altImg}/>
            <figcaption>
                <h5>{country.translations.fra.common}</h5>
                <div className="countryDetailsInfo">
                     <ul>
                        <li>
                            <span>Native Name: </span>{nativeName}
                        </li>
                        <li>
                            <span>Population: </span>{populationString}
                        </li>
                        <li>
                            <span>Region: </span>{country.region}
                        </li>
                        <li>
                            <span>Sub Regions: </span>{country.subregion}
                        </li>
                        <li>
                            <span>Capital: </span>{country.capital}
                        </li>
                    </ul>
                    <ul>
                        
                        <li>
                            <span>Top Level Domain: </span>{country.tld}
                        </li>
                        <li>
                            <span>Currencies: </span>{currencies}
                        </li>
                        <li>
                            <span>Languages: </span>{Object.values(country.languages).join(", ")}
                        </li>
                        

                    </ul>
                </div>
                {borderCountry().join(", ")!=="no borders"  
                &&  <div className="borderCountryButton">
                            <span>Border Countries: </span>
                            {borderCountry().map((country:string)=>{
                                const linkToCountry = "/Country/:"+country.replaceAll(" ","-"); 
                                return (
                                <NavLink to={linkToCountry} key={country}>{country}</NavLink>)
                            }
                            )}
                    </div>
                }
            </figcaption>   
        </figure>
    )
}

export default CountryCardDetails