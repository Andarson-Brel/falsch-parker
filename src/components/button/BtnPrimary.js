function BtnPrimary({ styles, children }) {
  return (
    <div>
      <button className="download-app" style={styles}>
        {children}
      </button>
    </div>
  );
}

export default BtnPrimary;
