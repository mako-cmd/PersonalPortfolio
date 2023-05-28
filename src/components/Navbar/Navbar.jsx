import Navbar_Logo from './Navbar_Logo'
import Navbar_Item from './Navbar_Item'
import '/src/pages/LandingPage/styles/landing_global.css'

const Navbar = () => {
  return (
    <>
      <div className=' fixed z-30 navbar-wrapper flex place-content-center  place-items-center h-24 w-screen mt-2'>
        <div className='navbar hidable max-h-28 bg-white rounded-full  flex place-content-center place-items-center'>
          <Navbar_Logo src='earth.png' />
          <div className='nav-bar-items hidable  flex place-content-start gap-4 overflow-y-hidden overflow-x-auto w-auto'>
            <Navbar_Item label='Home' />
            <Navbar_Item label='Experience' />
            <Navbar_Item label='Projects' />
            <Navbar_Item label='Contact' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
