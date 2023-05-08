import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Landing_Page from '../LandingPage/Landing_Page'

const App = () => {
  return (
    <>
      <div className=' overflow-x-hidden bg-gray-200 z-0'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
