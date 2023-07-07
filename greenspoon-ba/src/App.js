import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/team' element={<Team/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
