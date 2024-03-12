import logo from './logo.svg';
import './App.css';
import SerivesPage from './pages/ServiesPage/SerivesPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Seatreservation from './pages/SeatReservation/Seatreservation';
import PassngerData from './pages/passngerData/PassngerData';
import AirPlanData from './pages/AirPLanData/AirPlanData';
import OverviewCheckout from './pages/OverviewCheckout/OverviewCheckout';
import OverviewReseat from './pages/OverviewReseat/OverviewReseat';
import MealsOnBoard from './pages/MealsOnBoard/MealsOnBoard';
import AdditionalBaggage from './pages/AdditionalBaggage/AdditionalBaggage';


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
      <Route path='OverviewCheckout' element={<OverviewCheckout/>} /> 
      <Route path='OverviewReseat' element={<OverviewReseat/>}/> 
      <Route path='MealsOnBoard' element={<MealsOnBoard/>}/> 
      <Route path="AdditionalBaggage" element={<AdditionalBaggage/>}/>
    
     </Routes> 
     </div>
     <Footer/> 
     </>
  );
}

export default App;
