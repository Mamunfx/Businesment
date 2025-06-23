import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
