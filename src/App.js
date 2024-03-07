import logo from './logo.svg';
import './App.css';
import SerivesPage from './pages/ServiesPage/SerivesPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Seatreservation from './pages/SeatReservation/Seatreservation';
import PassngerData from './pages/passngerData/PassngerData';
import AirPlanData from './pages/AirPLanData/AirPlanData';


function App() {
  return ( 
    <>
      <Nav/>
     <div className=''>
     <Routes>
      <Route path='/' element={<SerivesPage/> }/>
      <Route path='Seatreservation' element={<Seatreservation/>}/> 
      <Route path='PassngerData' element={<PassngerData/>}/>  
      <Route path='AirPlanData' element={<AirPlanData/>}/>
    
     </Routes> 
     </div>
     <Footer/> 
     </>
  );
}

export default App;
