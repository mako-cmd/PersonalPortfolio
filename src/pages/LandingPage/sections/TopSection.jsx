import { Button } from 'antd'
import BackgroundAnimation from '../components/BackgroundAnimation.jsx'
import '/src/pages/LandingPage/styles/landing_global.css'

const TopSection = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div
        className='relative z-10 min-h-screen w-screen grid'
        style={{
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}
      >
        <div className=' flex flex-col place-content-center place-items-center lg:text-7xl text-3xl  font-extralight '>
          <h1>Hi there,</h1>
          <h1>my name is Mako.</h1>
          <h1>I write software.</h1>
        </div>
        <div className=' flex flex-col place-content-center place-items-center mt-10'>
          <Button
            type='button'
            className=' btn text-2xl p-10 bg-cyan-600 flex place-content-center place-items-center shadow-lg hover:scale-105 backdrop-blur-md active:scale-100'
            style={{
              background: 'rgba(8,145,178,0.5)',
              borderRadius: '100px',
              transition: 'transform 100ms ease-in-out',
              outline: 'none'
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TopSection
