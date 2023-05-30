import TopSection from './sections/TopSection/TopSection'
import Introduction from './sections/Introduction'
import Experience from './sections/Experience/Experience'
import './styles/landing_global.css'
import Projects from './sections/Projects/Projects.jsx'
import Separator from './components/Separator.jsx'
const Landing_Page = () => {
  return (
    <div className=' z-20'>
      <TopSection />
      <Introduction />
      <Experience />
      <Projects />
    </div>
  )
}

export default Landing_Page
