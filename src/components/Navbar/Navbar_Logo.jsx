/**
 *
 * @param {} param0
 * @returns
 */

const Navbar_Logo = ({ src, style, link }) => {
  style = style || {
    overflow: "hidden",
    height: "100%",
    padding: "10px",
    display: "flex",
    margin: "0 20px 0 20px",
  };
  return (
    <a href={link ?? "#"} className="logo-wrapper" style={style}>
      <img src={src} />
    </a>
  );
};

export default Navbar_Logo;
