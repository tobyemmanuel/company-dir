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
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <main>
      <AboutSection/>
      <TableSection/>
      <MapSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
