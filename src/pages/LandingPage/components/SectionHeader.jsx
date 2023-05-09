import Separator from './Separator'

const SectionHeader = ({ Title }) => {
  Title = Title ?? '<i>Untitled</i>'
  return (
    <>
      <div className='header-wrapper relative'>
        <Separator height='13rem' />
        <div className='absolute top-0 left-0 z-10 w-full h-full flex place-content-center place-items-start'>
          <h1 className=' font-semibold  lg:text-7xl text-3xl text-center'>
            {Title}
          </h1>
        </div>
      </div>
    </>
  )
}

export default SectionHeader
