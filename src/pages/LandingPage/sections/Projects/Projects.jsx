import Styled_Tabs from './Components/Tabs'
import SectionHeader from '../../components/SectionHeader'

let Projects = () => {
  return (
    <div className=' flex flex-col w-screen h-auto overflow-x-hidden place-content-center place-items-center'>
      <div className='mt-20 mb-20'>
        <SectionHeader Title='Projects' />
        <Styled_Tabs />
      </div>
    </div>
  )
}

export default Projects
