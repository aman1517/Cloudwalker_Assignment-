import Create from './Components/Create';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllUser from './Components/AllUser';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
   
    <Route path="/" element={<Home/>}/>
    <Route path="create" element={<Create />} />
    <Route path="getusers" element={<AllUser />} />
  
    </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;
