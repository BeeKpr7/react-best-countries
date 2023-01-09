import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleDarkMode} from '../features/countries/countriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Header: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()
    const click = ()=> dispatch(toggleDarkMode())
    return(
        
            <nav>
                <NavLink to='/'>
                    <h1>Where in the world?</h1>
                </NavLink>
                <button onClick={()=>click()}><FontAwesomeIcon icon={faMoon}/>   Dark Mode</button>
            </nav>
        
    )
}

export default Header