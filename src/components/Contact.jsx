import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import  '../assets/css/Contact.css'

function Contact() {
  return (
    <section className="container-lg mt-5" id="contato">

        <h2>Contatos</h2>
        <section className="contact mt-3">
                <a
                    href="https://wa.me/5541988731434"
                    className="d-flex align-items-center justify-content-center gap-3"
                    target="_blank"
                >
                    <span>WhatsApp</span>
                    <i><FaWhatsapp/></i>
                </a>
                <a  href="mailto:vinicyosferreiradev@gmail.com"
                    className="d-flex align-items-center justify-content-center gap-3"
                    target="_blank"
                >
                    <span>Email</span>
                    <i><MdEmail/></i>
                </a>
                <a href="https://www.linkedin.com/in/vinicyos-ferreira/"
                   className="d-flex align-items-center justify-content-center gap-3"
                   target="_blank"
                >
                    <span>Linkedin</span>
                    <i><FaLinkedin/></i>
                </a>     
                <a href="https://github.com/VinicyosFerreira"
                   target="_blank"
                   className="d-flex align-items-center justify-content-center gap-3"
                >
                    <span>Github</span>
                    <i><FaGithub/></i>
                </a>           
            </section>
        </section>

  )
}

export default Contact