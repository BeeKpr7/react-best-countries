import React, { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {changeRegionFilter,editFilterSearch} from '../features/countries/countriesSlice'


const NavBar: React.FunctionComponent = ()=> {
    const dispatch = useDispatch()
    const inputSearch = useRef(null);

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(editFilterSearch(e.currentTarget.value.toUpperCase()));
    }

    const handleKeyDown = (e:any)=>{
        if (e.key==='Escape') console.log("escape");
        
    }
    return (
        <nav>
            <input  ref={inputSearch} 
                    type="text" 
                    onChange={(e)=>handleSubmit(e)}
                    onKeyDown={(e)=>handleKeyDown(e)} />

            <select name="region" onChange={({target:{value}})=>dispatch(changeRegionFilter(value))} >
                <option value="" selected={true} >Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </nav>
    )
}

export default NavBar