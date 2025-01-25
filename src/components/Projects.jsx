import UseFetchData from '../hooks/UseFetchData'
import {imgs} from '../data/uploadImgs'
import '../assets/css/Projects.css'
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function Projects() {

  const {repositories} = UseFetchData();

  if(!repositories) {
    return 
  } 

  const filterRepositories = repositories.filter((repo) => {
       return imgs.some((img) => {
          if (img.name === repo.name) {
            return repo.imgUrl = img.ImgUrl
          }
      })
  })

  
  return (
    <div className='container-lg row gap-3 mx-auto' id="projetos">
      <h2 className='col-12'>Projetos</h2>
        {filterRepositories && filterRepositories.map ((repositorie) => {
            return (
             <section className="card rounded-2
                bg-transparent text-light card-projects" key={repositorie.id}>

                    <img src={repositorie.imgUrl} alt="img_name" 
                    className='img-fluid card-top-img mt-2'/>
                    <h3 className='card-header'>{repositorie.name.split(/-|_/).join(" ")}</h3>

                    <section className='card-body d-flex flex-column gap-1'>

                        <p className='card-text'>{repositorie.description}</p>
                        <p className='card-text'>Tecnologias: {repositorie.topics.join(", ")}</p>

                        <div className='d-flex'>
                          <a className='card-link'
                            href={repositorie.html_url} target='_blank'> 
                            <i className="icon-github"><FaGithub/></i>
                          </a>
                       
                            <a className='card-link' 
                            href={repositorie.homepage} target='_blank'> 
                              <i className= "icon-global">
                                 <AiOutlineGlobal/>
                              </i>
                            </a>
                          </div>
                    </section>
              </section>
            )
        })}
    </div>
  )
}

export default Projects