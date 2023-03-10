import Create from './Components/Create';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllUser from './Components/AllUser';
import Update from './Components/Update';
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
   
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create />} />
    <Route path="/getusers" element={<AllUser />} />
    <Route path="/update/:id" element={<Update />} />
  
    </Routes>
  
  </>

  );
}

export default App;
