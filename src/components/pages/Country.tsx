import React from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { CountryPropsInterface } from '../CountryCard'
import { CountriesInterface } from "../CountriesList.js"
import CountryCardDetails from "../CountryCardDetails"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { ALLCOUNTRIES, COUNTRYDATA, SELECTEDCOUNTRY, setSelectedCountry } from "../../features/countries/countriesSlice"

const Country: React.FunctionComponent = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const countries = useSelector(ALLCOUNTRIES)

    //dispatch(setSelectedCountry(params.countryName))
    //const selectedCountry = useSelector(SELECTEDCOUNTRY)
    /*COUNTRYDATA est disponible dans countriesSlice mais ne permet pas le rafraichissement de la page */
    const country = countries.filter((country:CountryPropsInterface["country"])=>
    country.name.common.replaceAll(" ","-") === params.countryName)[0]
    
    return (
        <main className="country">
            <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button>
            {country ?   
                <CountryCardDetails country={country}/>
             :
                <p>Sorry, No results for {params.countryName}</p>
            }  
        </main>
    )
}
export default Country