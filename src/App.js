import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Porfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {useState} from "react"

function App() {  
  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
