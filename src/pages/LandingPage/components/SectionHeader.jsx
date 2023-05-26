import Separator from './Separator'
import '/src/pages/LandingPage/styles/landing_global.css'

const SectionHeader = ({ Title }) => {
  Title = Title ?? '<i>Untitled</i>'
  return (
    <>
      <div className='header-wrapper relative'>
        <div className=' top-0 left-0 z-10 w-full h-full flex place-content-center place-items-center'>
          <h1 className=' font-semibold  lg:text-7xl text-3xl text-center border-b-8 pb-6 border-primary'>
            {Title}
          </h1>
        </div>
      </div>
    </>
  )
}

export default SectionHeader
