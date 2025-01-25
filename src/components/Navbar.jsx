import { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [menu , setMenu] = useState(false);
  const [screen , setScreen] = useState(window.innerWidth);

  function handleResize () {
      setScreen(window.innerWidth);

      if(screen > 768) {
        setMenu(false);
      }
  }

  useEffect(() => {
       window.addEventListener("resize" , handleResize);

      return () => {
        window.removeEventListener("resize" , handleResize);
      }
  } , [screen])

  function handleClick () {
    setMenu(!menu);
  }

  function closeMenu () {
    setMenu(!menu);
  }

  return (
    <>
      <section className="navbar navbar-expand-md d-flex">

          {!menu ?
            <button type="button" title="Icone de menu toggle"
            className="navbar-toggler" onClick={handleClick}
              >
              <i className='menu-toggle'>
                <IoMdMenu/>
              </i>
            </button>
            :
            <nav className ={`custom-navbar bg-dark menu-mobile`}>
              <a onClick={closeMenu} className='close-menu'>X</a>
              <a href="#" className="nav-link p-2">HOME</a>
              <a href="#projetos" className="nav-link p-2">PORTFÓLIO</a>
              <a href="#sobre" className="nav-link p-2">SOBRE</a>
              <a href="#contato" className="nav-link p-2">CONTATOS</a>
            </nav>
          }

          <nav className="collapse navbar navbar-collapse custom-navbar">
              <a href="#" className="nav-link p-2">HOME</a>
              <a href="#projetos" className="nav-link p-2">PORTFÓLIO</a>
              <a href="#sobre" className="nav-link p-2">SOBRE</a>
              <a href="#contato" className="nav-link p-2">CONTATOS</a>
          </nav>
        </section>
      </>
  )
}

export default Navbar