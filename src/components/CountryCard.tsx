import React from 'react'

export interface CountryPropsInterface {
    country : {
        fifa: string,
        name:{
            common:string
        }
        capital:string
        region:string
        flags: {
            png:string
        }
        population: number
    }
}
const CountryCard: React.FunctionComponent<CountryPropsInterface> = ({country}) => {
    const altImg = `Country Flag of + ${country.name.common}`
    const populationString = country.population.toLocaleString("en-US")
    return (
        <figure>
            <img src={country.flags.png} alt={altImg}/>
            <figcaption>
                <h5>{country.name.common}</h5>
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
    )
}
export default CountryCard