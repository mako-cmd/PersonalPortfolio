const Navbar_Item = ({ label, link, style }) => {
  style = style || {
    overflow: "hidden",
    height: "100%",
    padding: "10px",
    display: "flex",
    margin: "0 5px 0 5px",
  };

  return (
    <>
      <a
        className="hover:font-semibold transition-all flex place-items-center"
        href={link ?? "#"}
        style={style}
      >
        {label ?? "Unlabeled"}
      </a>
    </>
  );
};

export default Navbar_Item;
