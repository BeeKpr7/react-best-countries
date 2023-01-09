import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { CountryPropsInterface } from '../CountryCard'
import { CountriesInterface } from "../CountriesList.js"
import CountryCardDetails from "../CountryCardDetails"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Country: React.FunctionComponent = () => {
    const params = useParams()
    const navigate = useNavigate()
    const countries = useSelector((state:CountriesInterface)=>state.countries.data)
    const country = countries.filter((country: CountryPropsInterface["country"])=> ":"+country.name.common.replaceAll(" ","-")===params.countryName)

    return (
        <main className="country">
            <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeftLong} />Back</button>
            {country.length > 0 ?   
                <CountryCardDetails country={country[0]}/>
             :
                <p>Sorry, No results for {params.countryName}</p>
            }  
        </main>
    )
}
export default Country