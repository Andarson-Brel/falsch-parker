import DragDownBtn from "../button/DragDownBtn";

function BlogCard({ readTime, categoryTitle, blogThmb, blogTitle, blogDesc }) {
  return (
    <div className="blog-card-cont">
      <div className="blog-card-content-card">
        <img src={blogThmb} alt="Blog Thumbnail" className="blog-thumb" />
        <div className="blog-card-content-cont">
          <div className="category-time-cont">
            <h4 className="category-title">{categoryTitle}</h4>
            <p className="read-time">{readTime}</p>
          </div>
          <h2 className="blog-title">{blogTitle}</h2>
          <p className="blog-desc">{blogDesc}</p>
        </div>
      </div>
      <DragDownBtn />
    </div>
  );
}

export default BlogCard;
