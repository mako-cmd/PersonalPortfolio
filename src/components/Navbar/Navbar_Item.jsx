const Navbar_Item = ({ label, link, style }) => {
  style = style || {
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    minWidth: 'max-content',
    flexShrink: '0',
    whiteSpace: 'nowrap'
  }

  return (
    <>
      <a
        className='hover:font-semibold text-lg transition-all flex place-items-center'
        href={link ?? '#'}
        style={style}
      >
        {label ?? 'Unlabeled'}
      </a>
    </>
  )
}

export default Navbar_Item
