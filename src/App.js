import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Porfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {useState, createContext} from "react"

export const AppContext = createContext()

function App() {  
  const [page, setPage] = useState("About")

  const renderPage = () => {
    if(page === "About") {
      return <About />
    }
    if(page === "Portfolio") {
      return <Porfolio />
    }
    if(page === "Resume") {
      return <Resume />
    }
    if(page === "Contact") {
      return <Contact />
    }
  }

  return (
    <div className="App">
      <AppContext.Provider value={{setPage}}>
      <Header />
        {renderPage()}
      <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
