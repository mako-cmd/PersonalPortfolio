import Styled_Tabs from './Components/Tabs'

let Projects = () => {
  return (
    <div className=' flex flex-col w-screen h-auto overflow-x-hidden place-content-center place-items-center'>
      <h1 className='font-semibold  lg:text-7xl text-3xl text-center'>
        Projects
      </h1>
      <div className='mt-20 mb-20'>
        <Styled_Tabs />
      </div>
    </div>
  )
}

export default Projects
