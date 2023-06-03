import { Button, Modal } from 'antd'
import BackgroundAnimation from '../../components/BackgroundAnimation.jsx'
import '/src/pages/LandingPage/styles/landing_global.css'
import { useState } from 'react'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadingIcon from '@mui/icons-material/Downloading'
import NewContactLink from './components/NewContactLink.jsx'
import GitHubIcon from '@mui/icons-material/GitHub'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'

const TopSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const downloadResume = () => {
    window.open('/M_Mangwiro_Resume.pdf', '_blank')
  }

  return (
    <div id='Home'>
      <BackgroundAnimation />
      <div className='relative z-10 h-screen w-screen grid card-inner dynamic'>
        <div className=' flex flex-col md:place-content-center place-content-end p-4 place-items-center lg:text-7xl text-3xl  font-extralight '>
          <h1>Hi there,</h1>
          <h1>my name is Mako.</h1>
          <h1>I write software.</h1>
          <div className='flex md:text-xl text-base pt-4 mt-4 text-center md:gap-4 gap-1'>
            <span className='flex place-items-center grow'>
              Tech Enthusiast
            </span>
            <span className='flex place-items-center grow'>|</span>
            <span className='flex place-items-center grow'>
              Software Development
            </span>
            <span className='flex place-items-center grow'>|</span>
            <span className='flex place-items-center grow'>Electronics</span>
          </div>
        </div>
        <div className=' flex flex-col md:place-content-center place-content-start p-4 place-items-center md:mt-10 gap-10'>
          <Button
            onClick={openModal}
            type='button'
            id='contact_btn'
            className='  btn w-80 text-2xl p-10 bg-cyan-600 flex gap-2 place-content-center place-items-center shadow-lg hover:scale-105 backdrop-blur-md active:scale-100'
            style={{
              background: 'rgba(8,145,178,0.5)',
              borderRadius: '100px',
              transition: 'transform 100ms ease-in-out',
              outline: 'none'
            }}
          >
            <ConnectWithoutContactIcon style={{ scale: '1.2' }} />
            Get In Touch
          </Button>
          <Button
            onClick={downloadResume}
            type='button'
            id='contact_btn'
            className='  btn w-80 text-2xl p-10 bg-cyan-600 flex gap-2 place-content-center place-items-center shadow-lg hover:scale-105 backdrop-blur-md active:scale-100'
            style={{
              background: 'rgba(8,145,178,0.5)',
              borderRadius: '100px',
              transition: 'transform 100ms ease-in-out',
              outline: 'none'
            }}
          >
            <DownloadingIcon style={{ scale: '1.2' }} />
            Download My Resume
          </Button>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        centered
        title={<i className=' text-2xl'>Get In Touch</i>}
      >
        <NewContactLink
          icon={<EmailOutlinedIcon />}
          link={'mailto:makomboreroman@gmail.com?subject=From%20Portfolio'}
          label={'makomboreroman@gmail.com'}
        />
        <NewContactLink
          icon={<ContactPhoneOutlinedIcon />}
          link={'tel:0402908421'}
          label={'0402908421'}
        />
        <NewContactLink
          icon={<LinkedInIcon />}
          link={'https://www.linkedin.com/in/mako-the-engineer/'}
          label={'LinkedIn'}
        />
        <NewContactLink
          icon={<GitHubIcon />}
          link={'https://github.com/mako-cmd'}
          label={'Github'}
        />
      </Modal>
    </div>
  )
}

export default TopSection
