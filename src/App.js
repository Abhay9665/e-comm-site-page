import logo from './logo.svg';
import { FaHeart, FaRegHeart } from "react-icons/fa";

import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Jumbotron from './components/Jumbotron';
import BestSellers from './components/BestSellers';
import SwissBeuty from './components/SwissBeuty';
import NewArrivals from './components/NewArrivals';
import SportLight from './components/SportLight';
import GiftsKits from './components/GiftsKits';
import ShopTheLook from './components/ShopTheLook';
import TrendsSeller from './components/TrendsSeller';
import Categories from './components/Categories';
import MediaCoverage from './components/MediaCoverage';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">

      <Navbar />
      <Slider />
      <Jumbotron />
      <BestSellers />
      <SwissBeuty />
      <NewArrivals />
      <strong className='in-the-sportlight'>IN THE SPORTLIGHT</strong>
      <SportLight />
      <GiftsKits />
      <ShopTheLook />
      <TrendsSeller />
      <Categories />
      <MediaCoverage />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
