function RotateDownbtn({ imgsrc, styles }) {
  return (
    <div className={`down-btn-cont `} style={styles}>
      <button className="down-rotate">
        <img src={imgsrc ? imgsrc : "./images/arrow-rotate.svg"} alt="icon" />
      </button>
    </div>
  );
}

export default RotateDownbtn;
