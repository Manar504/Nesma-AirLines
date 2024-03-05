import logo from './logo.svg';
import './App.css';
import SerivesPage from './pages/ServiesPage/SerivesPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div > 
      <Nav/>
     <SerivesPage/> 
     <Footer/>
    </div>
  );
}

export default App;
