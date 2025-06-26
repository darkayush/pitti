import LenisScroll from './Components/LenisScroll';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import "./App.css"
import Footer from './Components/Footer';

const App = () => {
  return (
    <LenisScroll>
      <div className="flex-grow">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    <Footer/>
    </LenisScroll>
  )
}

export default App
