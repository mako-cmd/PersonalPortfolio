const UnderConstruction = () => {
  return (
    <div
      className='tab-panel-inner-wrapper place-content-center place-items-center'
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <img className=' max-w-sm' src='/barrier.png' alt='Under Construction' />
      <p
        className=' text-center text-lg font-extralight'
        style={{ width: 'inherit' }}
      >
        This section is still under construction. Updates are coming soon.
      </p>
    </div>
  )
}

export default UnderConstruction
