import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {changeRegionFilter,editFilterSearch} from '../features/countries/countriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export enum Regions {
    af = "Africa",
    am = "Americas",
    as = "Asia",
    eu = "Europe",
    oc = "Oceania",
    at = "Antarctic"
}

const FilterBar: React.FunctionComponent = ()=> {
    const dispatch = useDispatch()
    const inputSearch = useRef(null);

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(editFilterSearch(e.currentTarget.value.toUpperCase()));
    }

    const handleKeyDown = (e:any)=>{
        if (e.key==='Escape') console.log("escape");
        
    }
    return (
        <aside>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input  ref={inputSearch} 
                    type="text" 
                    placeholder='Search for a country'
                    onChange={(e)=>handleSubmit(e)}
                    onKeyDown={(e)=>handleKeyDown(e)} />
            </div>

            <select name="region" onChange={({target:{value}})=>dispatch(changeRegionFilter(value))} >
                <option value="" selected >Filter by Region</option>
                {Object.values(Regions).map((region:string)=>(<option key={region} value={region}>{region}</option>))}
            </select>
            
        </aside>
    )
}

export default FilterBar