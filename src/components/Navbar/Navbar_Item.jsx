const Navbar_Item = ({ label, link, style, clickEvent }) => {
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
        className='hover:font-semibold font-normal text-xl transition-all flex place-items-center'
        href={link ?? null}
        onClick={clickEvent ?? null}
        style={style}
      >
        {label ?? 'Unlabeled'}
      </a>
    </>
  )
}

export default Navbar_Item
