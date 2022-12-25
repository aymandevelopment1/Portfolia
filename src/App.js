
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './components/pages/Home';

import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
// import HeoImage from './components/HeoImage';

function App() {
  return (
    <div >

     

      <Router>
  
        <Routes>
          <Route path='/' element={<Home/>} />
           <Route path='/project' element={<Project/>} />
          <Route path='/about' element={<About/>} />
         
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        
      </Router>

      
    
     

    </div>
  );
}

export default App;
