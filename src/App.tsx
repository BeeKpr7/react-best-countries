import React from 'react'
import './css/normalize.css'
import './css/App.css'
import CoutriesList from './components/CountriesList'
import NavBar from './components/NavBar'
import {init} from './features/countries/countriesSlice'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'

function App() {
  const dispatch = useDispatch();
  const getFiles = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then((r)=>r.json())
    .then((json)=>dispatch(init(json)))
  }

  useEffect (()=>{
    getFiles()
  },[])

  return (
    <div className="App Dark-Mode">
      <NavBar/>
      <CoutriesList/>
    </div>
  );
}

export default App;
