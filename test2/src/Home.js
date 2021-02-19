// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      <div className="home__second">
        <div className="home__second__text">
          A place to Learn, teach and discuss about anything. Contribute and get
          rewarded. Serving community is our number 1 priority !
        </div>
      </div>
      {error && <div>{error}</div>}
      {isPending && (
        <div
          style={{
            backgroundColor: "black",
            minHeight: "100vh",
            color: "white",
            fontSize: "15px",
          }}
        >
          Loading.......
        </div>
      )}
      <div className="home__blog">{blogs && <BlogList blogs={blogs} />}</div>
    </div>
  );
};

export default Home;
