import {createSlice } from '@reduxjs/toolkit'       
//On crée un objet Slice 
const countriesSlice = createSlice({
    name: 'countries',
    initialState: { 
        data: [],
    },   
    reducers: {
				//nos fonctions qui viennent modifier notre state
            init : (state,{payload}) => {
                state.data = payload
            }
			//On inserera ici les autres fonctions nécessaires
    }
})

//On export nos fonctions
export const { init  } = countriesSlice.actions

//On exporte pour le reducer
export default countriesSlice.reducer