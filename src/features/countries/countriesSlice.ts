import {createSelector, createSlice } from '@reduxjs/toolkit'       
import { CountryPropsInterface } from '../../components/CountryCard.js';
//On crée un objet Slice 
const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        filterSelect:"",
        filterSearch:"", 
        data: [],
        darkMode:false,
        selectedCountry :"",
    },   
    reducers: {
				//nos fonctions qui viennent modifier notre state
            init : (state,{payload}) => {
                state.data = payload
            },
            changeRegionFilter: (state,{payload}) => {
                state.filterSelect = payload
            },
            editFilterSearch: (state,{payload}) => {
                state.filterSearch=payload
            },
            toggleDarkMode: (state)=> {
                state.darkMode = !state.darkMode
            },
            setSelectedCountry: (state,{payload})=> {
                state.selectedCountry=payload
            }
			//On inserera ici les autres fonctions nécessaires
    }
})
export const ALLCOUNTRIES = (state: { countries: { data: any } })=> {
    return state.countries.data
}
export const SELECTEDCOUNTRY = (state: { countries: { selectedCountry: any } })=> {
    return state.countries.selectedCountry
}
export const FILTERSEARCH = (state: {countries :{ filterSearch:any}}) => {
    return state.countries.filterSearch
}
export const FILTERSELECT = (state: {countries: {filterSelect:any }}) => {
    return state.countries.filterSelect
}
export const COUNTRIESFILTERED = createSelector(
    [ALLCOUNTRIES,FILTERSEARCH,FILTERSELECT],
    (countries:any,filterSearch:any,filterSelect:any) => {
        if (filterSelect==="") 
            return countries.filter((country: CountryPropsInterface["country"])=> country.translations.fra.common.toUpperCase().indexOf(filterSearch) > -1);

        return countries
                .filter((country:CountryPropsInterface["country"])=>
            country.region===filterSelect)
                .filter((country: CountryPropsInterface["country"])=> country.translations.fra.common.toUpperCase().indexOf(filterSearch) > -1)
    }
)
export const COUNTRYDATA = createSelector(
    ALLCOUNTRIES,
    SELECTEDCOUNTRY,
    (countries,countryName)=>
        countries.filter((country: { name: { common: string } })=>
            country.name.common === countryName)[0]
)
//On export nos fonctions
export const { init, changeRegionFilter,editFilterSearch, toggleDarkMode, setSelectedCountry  } = countriesSlice.actions

//On exporte pour le reducer
export default countriesSlice.reducer