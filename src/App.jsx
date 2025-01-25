import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Welcome from './components/Welcome'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
      <div className='app'>
           <Header></Header>
             <main className='container-fluid'>
              <Welcome/>
              <AboutMe/>
              <Skills/>
              <Projects/>
              <Contact/>
           </main>
           <Footer/>
      </div>
  )
}

export default App
