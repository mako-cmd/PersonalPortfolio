/**
 *
 * @param {} param0
 * @returns
 */

const Navbar_Logo = ({ src, style, link }) => {
  style = style || {
    overflow: 'hidden',
    width: 'fit-content',
    display: 'flex',
    margin: '1rem'
  }
  return (
    <a href={link ?? '#'} className='logo-wrapper' style={style}>
      <img className=' max-h-20' src={src} />
    </a>
  )
}

export default Navbar_Logo
