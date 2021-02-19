import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div
          style={{
            backgroundColor: "#18191a",
            color: "white",
          }}
        >
          loading.....
        </div>
      )}
      {error && (
        <div
          style={{
            backgroundColor: "#18191a",
            color: "white",
          }}
        >
          {error}
        </div>
      )}

      {blogs && (
        <div className="blog-details__content">
          <article>
            {/* <img src={`${blogs.img}`} alt="" srcset="" /> */}
            <h2>{blogs.name}</h2>
            {/* <p>Written by {blogs.author}</p> */}
            {/* <div>{blogs.body}</div> */}
            {/* <button onClick={handleDelete}>Delete blog</button> */}
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
