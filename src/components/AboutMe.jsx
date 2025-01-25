import '../assets/css/AboutMe.css'
import profile from '../assets/img/profile.jpeg'

function AboutMe() {
  return (
    <section className='about-me container-lg' id="sobre">
      <section className="d-flex flex-column flex-lg-row justify-content-evenly
      align-items-center gap-lg-3 gap-4">
          <div className="col-lg-4 col-7"> 
              <img src={profile} 
              className='img-fluid rounded-pill'
              alt='Foto de Vinicyos Ferreira'
              />
          </div>
          <section className="col-md-8 col-lg-7 col-10">
          <h2 className="h2">Sobre</h2>
            <p className='py-2'>
                Olá chamo Vinicyos Ferreira, tenho 20 anos, sou apaixonado
                por tecnologia e inovação. Me identifiquei pela TI aos 17
                anos, quando comecei a pesquisar no Youtube sobre a área. Com
                grande curiosidade de saber, como eram feitas as paginas web e
                os aplicativos que consumiam diariamente no celular. 
            </p>
            <p className='py-2'> 
                Dentro essa jornada, venho me aprofundando sobre o desenvolvimento web.
                Focado em aplicações front-end com HTML, CSS e JS. Além das 
                bibliotecas modernas como React.Também venho estudando back-end com 
                PHP e MySQL
            </p>
            <p className='py-2'>
              Atualmente estou cursando Análise e Desenvolvimento de Sistemas. Sempre 
              buscando aperfeiçoar para aplicar métodos, técnicas e padrões alinhados
              com as melhores práticas do mercado. Meu objetivo é 
              desenvolver projetos robustos e escaláveis no âmbito tecnológico, visando entregar 
              resultados que agreguem valor às pessoas
            </p>
          </section>
      </section>
    </section>
  )
}

export default AboutMe