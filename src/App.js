import React, { useState, useEffect } from 'react';
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

  const [companies, getCompanies] = useState([])
  const API = 'https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13';
  const fetchCompanies = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getCompanies(res)
      })
  }
  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <main>
      <AboutSection/>
      <TableSection companyData = {companies}/>
      <MapSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
