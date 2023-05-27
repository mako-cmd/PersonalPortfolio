import SectionHeader from '../components/SectionHeader'
import '../styles/landing_global.css'

const Introduction = () => {
  return (
    <div className='w-screen min-h-screen flex place-content-center place-items-center '>
      <div className=' md:grid md:grid-flow-col overflow-x-hidden flex  flex-col card shadow-md p-40'>
        <div className=' profile-picture flex place-content-center overflow-hidden place-items-center'>
          <img
            className='profile-pic rounded-full flex w-auto max-w-sm p-8'
            src='pro_pic.jpg'
          />
        </div>
        <div className='flex place-content-center place-items-center lg:text-3xl text-xl overflow-hidden flex-col  font-extralight text-center p-12'>
          <SectionHeader Title={'Hey There!'} />
          <p className=' pt-4'>
            My name is Makomborero but I go by Mako for short. I graduated last
            year as an engineer from RMIT University. I am now looking to kick
            start my career in software development. Scroll further to have a
            look at some of my work.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
