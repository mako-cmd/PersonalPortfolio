import SectionHeader from '../components/SectionHeader'
import '../styles/landing_global.css'
import Skill_Bubble from '../../../components/Navbar/Skill_Bubble'

const Introduction = () => {
  return (
    <div className='card-wrapper '>
      <div className='card shadow-md '>
        <div className='card-inner dynamic'>
          <div className=' profile-picture flex place-content-center overflow-hidden place-items-center'>
            <img
              className='profile-pic rounded-full flex max-w-full w-96'
              src='pro_pic.jpg'
            />
          </div>
          <div className='flex place-content-center place-items-center lg:text-3xl text-xl overflow-hidden flex-col  font-extralight text-center md:p-12'>
            <SectionHeader Title={'Hey There!'} />
            <p className=' pt-4'>
              My name is Makomborero but I go by Mako for short. I graduated
              last year as an engineer from RMIT University. I am now looking to
              kick start my career in software development. Scroll further to
              have a look at some of my work.
            </p>
            <p className=' mt-2 w-full'>
              <div className=' text-lg w-fit flex place-content-start place-items-center overflow-auto  flex-wrap'>
                Languages:&nbsp;
                <Skill_Bubble label='PHP' iconSrc='/LanguageLogos/php.png' />
                <Skill_Bubble label='C' iconSrc='/LanguageLogos/C.png' />
                <Skill_Bubble label='C++' iconSrc='/LanguageLogos/cpp.png' />
                <Skill_Bubble
                  label='C#'
                  iconSrc='/LanguageLogos/Csharp_Logo.png'
                />
                <Skill_Bubble
                  label='Javascript'
                  iconSrc='/LanguageLogos/JS_logo.png'
                />
                <Skill_Bubble
                  label='Assembler'
                  iconSrc='/LanguageLogos/ASM_logo.png'
                />
              </div>
            </p>
            <p className='mt-2 w-full '>
              <div className=' text-lg w-fit flex place-content-start place-items-center flex-wrap '>
                Frameworks:&nbsp;
                <Skill_Bubble
                  label='Laravel'
                  iconSrc='/LanguageLogos/Laravel_logo.png'
                />
                <Skill_Bubble
                  label='React'
                  iconSrc='/LanguageLogos/React_logo.png'
                />
                <Skill_Bubble
                  label='ASP.NET MVC'
                  iconSrc='/LanguageLogos/asp_net_logo.png'
                />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
