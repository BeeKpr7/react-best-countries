import React from 'react'
import { NavLink } from "react-router-dom"

export interface CountryPropsInterface {
    country : {
        fifa: string
        cca3:string
        name:{
            nativeName:{[key:string]:
                {
                    common:string
                    official:string
                }}
            common:string
            official:string
        }
        translations:{
            fra:{
                common:string
            }
        }

        borders:[string]
        tld:string
        capital:string
        region:string
        subregion:string
        languages:object
        currencies:{
            [key:string]:{
                name:string
            }
        }
        flags: {
            png:string
        }
        population: number
    }
}
const CountryCard: React.FunctionComponent<CountryPropsInterface> = ({country}) => {
    const altImg = `Country Flag of ${country.name.common}`
    const populationString = country.population.toLocaleString("en-US")
    const linkToCountry = "/Country/:"+country.name.common.replaceAll(" ","-");
    console.log(linkToCountry);
    
    return (
        <NavLink to={linkToCountry} >
        <figure>
            <img src={country.flags.png} alt={altImg}/>
            <figcaption>
                <h5>{country.translations.fra.common}</h5>
                <ul>
                    <li>
                        <span>Population: </span>{populationString}
                    </li>
                    <li>
                        <span>Region: </span>{country.region}
                    </li>
                    <li>
                        <span>Capital: </span>{country.capital}
                    </li>
                </ul>
            </figcaption>   
        </figure>
        </NavLink>
    )
}
export default CountryCard