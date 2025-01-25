import Navbar from "./Navbar";
import '../assets/css/Navbar.css'
import '../assets/css/Header.css'
import code from '../assets/img/source-code.png'

function Header() {
  
   return (
    <header className= "header container-fluid d-flex justify-content-around align-items-center" id="home">
      <section className="social-media">
           <img src={code} alt="Representa um icone de código fonte"/>
      </section>  
      <Navbar/>
    </header>
  )
}

export default Header