import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
        <MyProjects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
