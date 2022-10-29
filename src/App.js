import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Works from './components/Works';
import Home from "./components/Home";
import Blog from "./Blog";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/works' element={<Works/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
