import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TableSection from './components/TableSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <TableSection/>
      <MapSection/>
      <Footer/>
    </div>
  );
}

export default App;
