import React ,{useEffect}from 'react'
import './css/normalize.css'
import './css/App.css'
import CoutriesList , { CountriesInterface }from './components/CountriesList'
import NavBar from './components/NavBar'
import Header from './components/Header'
import {init} from './features/countries/countriesSlice'
import {useDispatch, useSelector} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const getFiles = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then((r)=>r.json())
    .then((json)=>dispatch(init(json)))
  }

  const darkMode = useSelector((state:CountriesInterface)=>state.countries.darkMode)

  useEffect (()=>{
    getFiles()
  },[])

  return (
    <div className={darkMode ? "App Dark-Mode" : "App White-Mode" }>
      <Header/>
      <NavBar/>
      <CoutriesList/>
    </div>
  );
}

export default App;
