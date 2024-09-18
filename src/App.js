
import './App.css';
import './navbar.css'
import './home.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBar from './Componants/NavBar';
import Home from './Componants/Pages/Home';

function App() {
  return (
   
  
     <>
<BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='home' element={<Home/>}>Home</Route>
        </Routes>
        </BrowserRouter>
        </>
    
  );
}

export default App;
