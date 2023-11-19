
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/shares/Nav'
import Footer from './Components/shares/Footer'

function App() {


  return (
    <>


      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>

    </>

  )
}

export default App
