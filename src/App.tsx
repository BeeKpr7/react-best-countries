import React from 'react';
import './App.css';
import CoutriesList from './components/CountriesList'
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
    <div className="App">
      <CoutriesList/>
    </div>
  );
}

export default App;
