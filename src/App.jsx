import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <MyProjects />
      <Education />
      <Contact />
    </>
  )
}

export default App
