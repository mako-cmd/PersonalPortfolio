import TopSection from './sections/TopSection'
import Introduction from './sections/Introduction'
import Experience from './sections/Experience/Experience'
import './styles/landing_global.css'
import Projects from './sections/Projects/Projects.jsx'
const Landing_Page = () => {
  return (
    <>
      <TopSection />
      <Introduction />
      <Experience />
      <Projects />
    </>
  )
}

export default Landing_Page
