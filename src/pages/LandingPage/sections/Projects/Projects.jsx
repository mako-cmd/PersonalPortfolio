import Styled_Tabs from './Components/Tabs'
import SectionHeader from '../../components/SectionHeader'

let Projects = () => {
  return (
    <div
      className='flex place-content-center place-items-center pb-8'
      id='Projects'
    >
      <div className='shadow-md card flex flex-col w-screen  overflow-x-hidden place-content-center place-items-center'>
        <SectionHeader Title='Projects' />
        <div className='mt-20 mb-20'>
          <Styled_Tabs />
        </div>
      </div>
    </div>
  )
}

export default Projects
