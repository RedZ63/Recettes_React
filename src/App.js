import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Recettes from "./pages/Recettes";
import Content from "./components/Content";
import Sucre from './components/Sucre';
import Sale from './components/Sale';
import Surprise from './components/Surprise';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recettes" element={<Recettes />} />
        
          <Route path='/recettes/sucre' element={<Sucre />} />
          <Route path='/recettes/sale' element={<Sale/>} />
          <Route path='/recettes/surprise' element={<Surprise/>} />
     
      </Routes>
    </BrowserRouter>


//     <Switch>
//   <Route path="/" element={<Home />} />
//   <Route path="contact" element={<Contact />} />
//   <Route path="recettes" element={<Recettes />} />
//   <Route path='/recettes#sucre' element={<Recettes />} />
//   <Route path='/recettes#sale' element={<Recettes />} />
//   <Route path='/recettes#surprise' element={<Recettes />} />
// </Switch>

  );
}

export default App;
