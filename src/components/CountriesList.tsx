import React from 'react'
import { useSelector } from 'react-redux'
import CountryCard ,{ CountryPropsInterface } from './CountryCard'

interface CountriesInterface {
    countries:{data: []},
}
const CountriesList: React.FunctionComponent = () => {

    const countries = useSelector((state:CountriesInterface)=>state.countries.data)
    
    
    return (
       <div>
        {countries.map((country: CountryPropsInterface["country"])=>{
            return(
                    <CountryCard 
                        key={country.fifa+Math.random().toString()}
                        country={country}/>
                )})}
       </div>
    )
}

export default CountriesList