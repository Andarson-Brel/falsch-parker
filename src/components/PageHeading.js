function PageHeading({ icons, text, children }) {
  return (
    <>
      <h1 className="page-heading">{children}</h1>
      <div className="sub-heading-cont ">
        <div className="icons-cont">
          {icons.map((icon, i) => (
            <div className="icon" style={{ zIndex: `${-i}` }} key={i}>
              {" "}
              <img src={icon} alt="icon" />{" "}
            </div>
          ))}
        </div>
        <div className="sub-head-desc">{text}</div>
      </div>
    </>
  );
}

export default PageHeading;
