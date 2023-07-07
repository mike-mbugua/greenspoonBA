import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Schedule from './components/Schedule/Schedule';
import Event from './components/events/Event';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/team' element={<Team/>}/>
        <Route path='/events' element={<Event/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
