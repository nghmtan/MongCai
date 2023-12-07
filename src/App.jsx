import './App.css';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import NavBar from './components/StickyNavBar/StickyNavBar';
import FooterCompo from './components/Footer/Footer';
// Import your screen components here
import AboutUs from './screens/AboutUs';
import Home from './screens/Home'
import Contact from './screens/Contact';
import GolfClub from './screens/GolfClub';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div style={{ height: 800 }} id='outer-container'>
        <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap" className='bg-[#e0dede]'>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/club" element={<GolfClub />} />
            {/* Add more routes for other screens/components */}
          </Routes>
          <FooterCompo />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
