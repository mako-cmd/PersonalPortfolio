import Navbar_Logo from './Navbar_Logo'
import Navbar_Item from './Navbar_Item'
import '/src/pages/LandingPage/styles/landing_global.css'
import { useState } from 'react'
import classNames from 'classnames'

const Navbar = () => {
  const [hidable, setHidable] = useState(false)

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setHidable(true)
    } else {
      setHidable(false)
    }
  }

  const navbarClass = classNames(
    'navbar',
    'max-h-28',
    'bg-white',
    'rounded-full',
    'flex',
    'place-content-center',
    'place-items-center',
    { hidable: hidable }
  )

  const navBarItemsClass = classNames(
    'nav-bar-items',
    'grid',
    'grid-flow-col',
    'gap-2',
    'overflow-y-hidden',
    'overflow-x-auto',
    'w-auto',
    { hidable: hidable }
  )

  return (
    <>
      <div className=' fixed z-30 au navbar-wrapper flex place-content-center   place-items-center h-24 w-screen mt-2'>
        <div className={navbarClass}>
          <Navbar_Logo src='earth.png' />
          <div className={navBarItemsClass}>
            <Navbar_Item label='Home' link='#Home' />
            <Navbar_Item label='Experience' link='#Experience' />
            <Navbar_Item label='Projects' link='#Projects' />
            <Navbar_Item
              label='Contact'
              clickEvent={() => {
                document.getElementById('contact_btn').click()
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
