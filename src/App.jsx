import './App.css'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import golfbanner from './assets/banner.jpg'
import NavBar from './components/StickyNavBar/StickyNavBar'
import VideoBanner from './components/VideoBanner/VideoBanner'
import ReadMore from './components/ReadMore/ReadMore'
import golftours from './assets/golftours.png'
import golfpackages from './assets/golfpackages.png'
import hotel from './assets/hotel.png'
import qualuuniem from './assets/qualuuniem.png'
import LocationCard from './components/LocationCard/LocationCard'
import { Button, Carousel } from 'flowbite-react';


import phinhho from './assets/phinhho.jpg'
import mongcaibanner from './assets/mongcaibanner.jpg'
import muisavi from './assets/muisavi.jpg'
import bien from './assets/bien.jpg'
import FooterCompo from './components/Footer/Footer'
import AboutUs from './screens/AboutUs'
import Contact from './screens/Contact'
import Home from './screens/Home'
function App() {
  return (
    <div style={{ height: 800 }} id='outer-container'>
      <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <main id="page-wrap">
        <NavBar />
        <AboutUs />
        <Contact />
        <FooterCompo />
      </main>
    </div>
  )
}

export default App
