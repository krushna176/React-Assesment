// import logo from './logo.svg';
import './App.css';
import './index.css'
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/footer';
import Solutions from './components/Solutions/solutions';



function App() {
  return (
  <>
    <Router>
    <Navbar />
    </Router>
    <Home/>
    <About/>
    <Solutions/>
    <Services/>
    <Footer/>
  </>
  );
  
  
  
}

export default App;
