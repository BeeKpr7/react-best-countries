import {createSelector, createSlice } from '@reduxjs/toolkit'       
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
                state.filterSearch=payload;
            },
            toggleDarkMode: (state)=> {
                state.darkMode = !state.darkMode;
            }
			//On inserera ici les autres fonctions nécessaires
    }
})
export const ALLCOUNTRIES = (state)=> {
    return state.countries.data
}
export const SELECTEDCOUNTRY = (state)=> {
    return state.countries.selectedCountry
}
export const COUNTRYDATA = createSelector(
    ALLCOUNTRIES,
    SELECTEDCOUNTRY,
    (countries,countryName)=>
    countries.filter((country)=>
    country.name.common === countryName)
)
//On export nos fonctions
export const { init, changeRegionFilter,editFilterSearch, toggleDarkMode  } = countriesSlice.actions

//On exporte pour le reducer
export default countriesSlice.reducer