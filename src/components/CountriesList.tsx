import React from 'react'
import { useSelector } from 'react-redux'
import CountryCard ,{ CountryPropsInterface } from './CountryCard'

interface CountriesInterface {
    countries:{
        data: [],
        filterSelect: string,
        filterSearch: string
    },
}
const CountriesList: React.FunctionComponent = () => {

    const filterSearch: string = useSelector((state:CountriesInterface)=>state.countries.filterSearch)

    const filterSelect:string = useSelector((state:CountriesInterface)=>state.countries.filterSelect)

    const countries = useSelector((state:CountriesInterface)=>{

        if (filterSelect==="") return state.countries.data;
        return state.countries.data.filter((country: CountryPropsInterface["country"])=>country.region===state.countries.filterSelect)
    })
    
    const countriesFiltered = countries.filter((country: CountryPropsInterface["country"])=> country.name.common.toUpperCase().indexOf(filterSearch) > -1)
    
    
    return (
       <section>
        {countriesFiltered.map((country: CountryPropsInterface["country"])=>{
            return(
                    <CountryCard 
                        key={country.fifa+Math.random().toString()}
                        country={country}/> 
                )})}
       </section>
    )
}

export default CountriesList