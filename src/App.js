import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Blog/>
        {/* <Routes>
          <Route path='/Header' element={<Header />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={< Services/>}/>
          <Route path='/Portfolio' element={<Portfolio />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Blog' element={<Blog />}/>
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
