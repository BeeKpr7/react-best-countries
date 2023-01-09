import React ,{useEffect}from 'react'
import './css/App.css'
import  { CountriesInterface }from './components/CountriesList'
import Header from './components/Header'
import Home from './components/pages/Home'
import Country from './components/pages/Country'
import { init } from './features/countries/countriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Route, HashRouter, Routes } from "react-router-dom";
function App() {

  const dispatch = useDispatch();

  const darkMode = useSelector((state:CountriesInterface)=>state.countries.darkMode)
  
  useEffect (()=>{
    getFiles()
  },[])
  
  const getFiles = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then((r)=>r.json())
    .then((json)=>dispatch(init(json)))
  }
  
  return (
    <HashRouter>
      <div className={darkMode ? "App Dark-Mode" : "App White-Mode" }>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Country/:countryName' element={<Country/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
