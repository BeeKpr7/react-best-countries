import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {DARKMODE, toggleDarkMode} from '../features/countries/countriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Header: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()
    const click = ()=> dispatch(toggleDarkMode())
    const darkMode = useSelector(DARKMODE)
    return(
        
            <nav>
                <NavLink to='/'>
                    <h1>Where in the world?</h1>
                </NavLink>
                {darkMode ?
                    <button onClick={()=>click()}><FontAwesomeIcon icon={faSun}/> Light Mode</button>
                :
                    <button onClick={()=>click()}><FontAwesomeIcon icon={faMoon}/> Dark Mode</button>
                }   
                    
            </nav>
        
    )
}

export default Header