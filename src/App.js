import logo from './logo.svg';
import './App.css';
import SerivesPage from './pages/ServiesPage/SerivesPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Seatreservation from './pages/SeatReservation/Seatreservation';
import PassngerData from './pages/passngerData/PassngerData';

function App() {
  return ( 
    <>
      <Nav/>
     <div className='continar'>
     <Routes>
      <Route path='/' element={<SerivesPage/> }/>
      <Route path='Seatreservation' element={<Seatreservation/>}/> 
      <Route path='PassngerData' element={<PassngerData/>}/>
     </Routes> 
     </div>
     <Footer/> 
     </>
  );
}

export default App;
