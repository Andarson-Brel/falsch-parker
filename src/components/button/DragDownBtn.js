function DragDownBtn({ styles, imgsrc }) {
  return (
    <div class={`down-btn-cont `} style={styles}>
      <button class="down-drag">
        <img src={imgsrc ? imgsrc : "./images/arrow-stretch.svg"} alt="icon" />
      </button>
    </div>
  );
}

export default DragDownBtn;
