import Create from './Components/Create';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <h1>Welcome to cloud</h1>
      <Create/>
    </div>
  );
}

export default App;
