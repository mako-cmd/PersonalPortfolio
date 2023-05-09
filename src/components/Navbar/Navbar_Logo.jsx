/**
 *
 * @param {} param0
 * @returns
 */

const Navbar_Logo = ({ src, style, link }) => {
  style = style || {
    overflow: 'hidden',
    width: 'fit-content',
    padding: '10px',
    display: 'flex',
    margin: '0 20px 0 20px'
  }
  return (
    <a href={link ?? '#'} className='logo-wrapper' style={style}>
      <img className=' max-h-20' src={src} />
    </a>
  )
}

export default Navbar_Logo
