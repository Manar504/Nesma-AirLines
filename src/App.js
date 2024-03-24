
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
import Pets from './pages/pets/Pets';
import SpecialEquipment from './pages/SpecialEquipment/SpecialEquipment';
import AirportLounge from './pages/AirportLounge/AirportLounge';
import UnaccompaniedMinor from './pages/UnaccompaniedMinor/UnaccompaniedMinor';
import PriorityCheckIn from './pages/PriorityCheckIn/PriorityCheckIn';
import PriorityBoarding from './pages/PriorityBoarding/PriorityBoarding';
import PassngerData2 from './pages/passngerData2/PassngerData2';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/notFound/NotFound';
import Return from './pages/return/Return';


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
      <Route path='Pets' element={<Pets/>}/> 
      <Route path='SpecialEquipment' element={<SpecialEquipment/>}/> 
      <Route  path='AirportLounge' element={<AirportLounge/>}/> 
      <Route path='UnaccompaniedMinor' element={<UnaccompaniedMinor/>}/> 
      <Route path='PriorityCheckIn' element={<PriorityCheckIn/>}/> 
      <Route path='PriorityBoarding' element={<PriorityBoarding/>} /> 
      <Route path='PassngerData2' element={<PassngerData2/>}/> 
      <Route path='SignIn' element={<SignIn/>}/> 
      <Route path='Return' element={<Return/>}/>
      <Route path='*'  element={<NotFound/>}/>
    
     </Routes> 
     </div>
     <Footer/> 
     </>
  );
}

export default App;
