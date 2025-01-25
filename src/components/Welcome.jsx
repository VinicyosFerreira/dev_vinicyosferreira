import devCoding  from '../assets/img/rb_8173.png'
import '../assets/css/Welcome.css'
import curriculo from '../assets/files/Curriculo-Vinicyos.pdf'
import {useState, useEffect} from 'react'


function Welcome() {
  const baseText  = "Desenvolvedor front-end";
  const [index , setIndex] = useState(0);
  const [text , setText] = useState("");

  const handleInterval = () => {
      setTimeout(() => {
          setText((prevText) => {
            return index > 0 ? prevText + baseText.charAt(index) : baseText.charAt(index)
          })
          setIndex(index + 1);
      }, 65)
  }

  useEffect(() => {
      if(index < baseText.length) {
           handleInterval();
        } 

     if(index > baseText.length - 1) {
        clearTimeout(handleInterval)
     }
   } , [index])

  return (
    <section className="welcome-container d-flex flex-sm-column container-xxl 
    flex-column gap-md-3 gap-5  flex-md-row align-items-center justify-content-center ">
      <section className='apresentation'>
            <h1 className="h1">Olá, sou Vinicyos Ferreira</h1>
             <p className="text-light text-welcome">
               {text}
             </p>
             <a href={curriculo} download="Curriculo-Vinicyos.pdf">
              <button className='btn text-light text-uppercase 
                p-3 btn-curriculum'>
                  Download CV
              </button>
            </a>
     </section> 

    <section className='d-flex code mt-2'>
        <img className='img-fluid'
        src={devCoding} 
        alt="Imagem representando um desenvolvedor escrevendo códigos" 
        />
    </section>
    </section>
  )
}

export default Welcome