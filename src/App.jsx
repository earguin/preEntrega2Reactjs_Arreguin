import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from './pages/Detail';
import Category from './pages/Category';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </div>
      {/* <ItemListContainer greeting="¡Hola! Tu paleta es de ...   " /> */}
    </Router>

  );
}
export default App;