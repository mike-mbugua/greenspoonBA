import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Schedule from './components/Schedule/Schedule';
// import Event from './components/events/Event';
import DriveRound from './components/events/DriveRound';
import ServicedAparts from './components/events/servicedAprts/ServicedAparts';
import Upcoming from './components/events/upcoming/Upcoming';
import VisitedAparts from './components/events/visited/VisitedAparts';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/team' element={<Team/>}/>
        <Route path='/drive-runs' element={<DriveRound/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/serviced-apartments' element={<ServicedAparts/>}/>
        <Route path='/upcoming-events' element={<Upcoming/>}/>
        <Route path='/visited-apartments' element={<VisitedAparts/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
