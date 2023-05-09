import '../styles/landing_global.css'

const Introduction = () => {
  return (
    <>
      <div className=' w-screen h-screen md:grid md:grid-flow-col overflow-x-hidden flex  flex-col'>
        <div className=' profile-picture flex place-content-center overflow-hidden place-items-center'>
          <img
            className='profile-pic rounded-full flex w-auto lg:max-w-2xl lg:p-32 md:p-20 p-10 '
            src='pro_pic.jpg'
          />
        </div>
        <div className='flex place-content-center place-items-center lg:text-3xl text-xl overflow-hidden  font-extralight text-center p-12'>
          <p>
            My name is Makomborero but I go by Mako for short. I graduated last
            year as an engineer from RMIT University. I am now looking to kick
            start my career in software development. Scroll further to have a
            look at some of my work.
          </p>
        </div>
      </div>
    </>
  )
}

export default Introduction
