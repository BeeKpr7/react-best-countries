import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleDarkMode} from '../features/countries/countriesSlice'

const Header: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()
    const click = ()=> dispatch(toggleDarkMode())
    return(
        <header>
            <h1>Where in the world ?</h1>
            <button onClick={()=>click()}>Dark Mode</button>
        </header>
    )
}

export default Header