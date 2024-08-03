import './App.css'
import GetStartedCard from './components/GetStartedCard/GetStartedCard'
import NavBar from './components/NavBar/NavBar'
import TaxCalculatorCard from './components/TaxCalculatorCard/TaxCalculatorCard'

function App() {

  return (
   <div className='app'>
    <div className="app-nav">
    <NavBar/>
    </div>
    <div className="ap-hero">
    <TaxCalculatorCard/>
    <GetStartedCard/>
    </div>
   </div>
  )
}

export default App
