import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeRegionFilter,editFilterSearch, FILTERSEARCH} from '../features/countries/countriesSlice'
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
    const inputSearch = useRef(null)
    const filterSearch = useSelector(FILTERSEARCH)

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch(editFilterSearch(e.currentTarget.value.toUpperCase()));
    }

    const handleKeyDown = (e:any)=>{
        if (e.key==='Escape') dispatch(editFilterSearch(""));
    }
    return (
        <aside>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input  ref={inputSearch} 
                    type="text" 
                    value={filterSearch}
                    placeholder='Search for a country'
                    onChange={(e)=>handleSubmit(e)}
                    onKeyDown={(e)=>handleKeyDown(e)} />
            </div>

            <select name="region"  onChange={({target:{value}})=>dispatch(changeRegionFilter(value))} >
                <option value=""  >Filter by Region</option>
                {Object.values(Regions).map((region:string)=>(<option key={region} value={region}>{region}</option>))}
            </select>
            
        </aside>
    )
}

export default FilterBar