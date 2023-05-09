import { height } from '@mui/system'
import '/src/pages/LandingPage/styles/landing_global.css'

let PanelItem = ({ imgUrL, title, description, linkToProject, color }) => {
  let panelWidth = '30rem'
  let panelHeight = '20rem'
  imgUrL = imgUrL ?? 'img-not-found.png'

  return (
    <a
      href={linkToProject ?? null}
      target='_blank'
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
    </a>
  )
}

export default PanelItem
