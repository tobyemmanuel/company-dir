import React, { useState, useEffect } from 'react';
//import styles
import './css/styles.css'
import './plugin/bi/bootstrap-icons.css'

//import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TableSection from './components/TableSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {

  const [companies, getCompanies] = useState([]) //set state for data
  const API_URL = 'https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13'; //API url
  const fetchCompanies = () => { // function to pull data from the API
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        getCompanies(res)
      })
  }
  useEffect(() => {
    fetchCompanies() //fetch the data
  }, [])

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <main>
      <AboutSection/>
      <TableSection companyData = {companies}/>
      <MapSection companyData = {companies}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
