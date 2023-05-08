import BackgroundAnimation from '../components/BackgroundAnimation.jsx'

const TopSection = () => {
  return (
    <div>
      <BackgroundAnimation />
      <div className='relative z-10 h-screen w-screen md:grid md:grid-flow-col overflow-hidden flex  flex-col md:mt-0 mt-10 pt-28 bg-transparent'>
        <div className=' flex flex-col place-content-center place-items-center lg:text-7xl text-3xl  font-extralight'>
          <h1>Hi there,</h1>
          <h1>my name is Mako.</h1>
          <h1>I write software.</h1>
        </div>
        <div className=' flex flex-col place-content-center place-items-center'>
          <img src='SuperDev.png' />
        </div>
      </div>
    </div>
  )
}

export default TopSection
