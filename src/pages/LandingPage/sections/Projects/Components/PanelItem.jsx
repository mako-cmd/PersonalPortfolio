import { height } from '@mui/system'
import '/src/pages/LandingPage/styles/landing_global.css'
import Modal from 'antd/es/modal/Modal'
import { useState } from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

let PanelItem = ({
  imgUrL,
  title,
  description,
  linkToProject,
  color,
  linkToRepo
}) => {
  let panelWidth = '30rem'
  let panelHeight = '20rem'
  imgUrL = imgUrL ?? 'img-not-found.png'

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div
        onClick={openModal}
        className='panel-item relative bg-white '
        style={{
          width: panelWidth,
          height: panelHeight,
          color: color ?? 'white'
        }}
      >
        <div
          className=' hover:absolute hover:inset-0 w-full h-full flex place-content-center place-items-center text-center z-10'
          style={{
            maxWidth: panelWidth,
            maxHeight: panelHeight,
            backgroundImage: 'url(' + imgUrL + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className='panel-item-overlay absolute inset-0 '></div>
        <p
          className=' p-10 absolute inset-0  opacity-0 hover:opacity-100 transition-all duration-500 flex flex-col place-content-center place-items-center text-center'
          style={{ fontFamily: 'system-ui' }}
        >
          <h1 className=' text-xl'>{title ? 'Project: ' + title : ''}</h1>
          <p className=' font-light'>{description ?? ''}</p>
          <br />
          <i className='font-thin'>
            {linkToProject ? 'Click To Learn More' : ''}
          </i>
        </p>
      </div>
      <Modal
        open={isOpen}
        title={<h1 className='text-2xl'>{title}</h1>}
        onCancel={closeModal}
        footer={
          <div className=' w-full flex place-content-center gap-10'>
            <a
              className='link-to-project '
              href={linkToProject}
              target='_blank'
            >
              <LaunchIcon /> Go To Project
            </a>
            <a className={'link-to-repo'} href={linkToRepo} target='_blank'>
              <GitHubIcon /> Go To Repository
            </a>
          </div>
        }
        width={'70vw'}
        centered
      >
        <div className='project-modal p-4'>
          <div className='flex flex-col place-content-center'>
            <img src={imgUrL} />
          </div>
          <div>
            <h3 className='text-xl'>Project Summary</h3>
            <br />
            <hr />
            <br />
            <p>{description}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PanelItem
