import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div className="blog-list__previews" key={item.id}>
          <img src={item.img} alt="kakak" />
          <h2>{item.title}</h2>
          <p>
            Written by <b>{item.author}</b>
          </p>
          <Link to={`/detail/${item.id}`}>
            <button>read blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
