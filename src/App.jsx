import LenisScroll from './Components/LenisScroll';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import "./App.css"
import Footer from './Components/Footer';
import Overview from './Pages/Overview';
import OurBusiness from './Pages/OurBusiness';
import BOD from './Pages/BOD';
import Subsidiaries from './Pages/Subsidiaries';
import Manufacturing from './Pages/Manufacturing';
import Products from './Pages/Products';
import Applications from './Pages/Applications';

const App = () => {
  return (
    <LenisScroll>
      <div className="flex-grow">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Overview/>
          <OurBusiness/>
          <BOD/>
          <Subsidiaries/>
          <Manufacturing/>
          <Products/>
          <Applications/>
        </BrowserRouter>
      </div>
    <Footer/>
    </LenisScroll>
  )
}

export default App
