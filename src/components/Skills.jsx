import '../assets/css/Skills.css'
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";

function Skills() {

  return (
    <section className="container-sm ">
        <h2 className='h2 text-center mb-4'>Habilidades</h2>
         <section className="row row-cols-lg-4 row-cols-sm-2 row-cols-2
         align-items-center justify-content-center skills gap-lg-3">
             <div className='col p-2 rounded text-center d-flex flex-column'>
                <span className='h4'>Javascript</span>
                <i><FaJs/></i>
            </div>
            <div className="col p-2 rounded text-center d-flex flex-column">
                <span className='h4'>React</span>
                <i><FaReact/></i>
            </div>
            <div className="col p-2 rounded text-center d-flex flex-column">
              <span className='h4'>PHP</span>
                <i>
                    <FaPhp/>
                </i>
            </div>
            <div className="col p-2 rounded text-center d-flex flex-column">
                <span className='h4'>MySQL</span>
                <i>
                    <SiMysql/>
                </i>
            </div>
            <div className='col p-2 rounded text-center d-flex flex-column'>
                 <span className='h4'>HTML</span>
                <i> 
                    <FaHtml5/>
                </i>
            </div>
            <div className='col p-2 rounded text-center d-flex flex-column'>
                <span className='h4'>CSS</span>
                <i>
                    <FaCss3/>
                </i>
            </div>
            <div className='col p-2 rounded text-center d-flex flex-column'>
                <span className='h4'>Git</span>
                <i>
                    <FaGitAlt/>
                </i>
            </div>
            <div className='col p-2 rounded text-center d-flex flex-column'>
                <span className='h4'>Bootstrap</span>
                <i>
                    <FaBootstrap/>
                </i>
            </div>
         </section>
    </section>
  )
}

export default Skills