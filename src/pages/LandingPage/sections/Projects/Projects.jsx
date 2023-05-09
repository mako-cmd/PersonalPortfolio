import Styled_Tabs from './Components/Tabs'
import SectionHeader from '../../components/SectionHeader'

let Projects = () => {
  return (
    <div className=' flex flex-col w-screen  overflow-x-hidden place-content-center place-items-center min-h-screen'>
      <SectionHeader Title='Projects' />
      <div className='mt-20 mb-20'>
        <Styled_Tabs />
      </div>
    </div>
  )
}

export default Projects
