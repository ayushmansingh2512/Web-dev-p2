import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div  >
      <Background />
      <Navbar />
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App