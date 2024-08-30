
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Logo from './Components/Logo/Logo';
// import Search from './Components/Search/Search';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Hero from './Components/Hero/Hero';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//       <Navbar>
//       <Logo />
//       <Search placeH={"Search a album of your choice"} />
//       <Hero />
//     </Navbar>
//       </Router>
   
    
//     </div>
//   );
// }

// export default App;

import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Card from './Components/Card/Card';




function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/card' element={<Card />} />
    <Route path='/section' element={<Section/>}/> 

    </Routes>
    </Router>
    </div>
  );
}

export default App;
