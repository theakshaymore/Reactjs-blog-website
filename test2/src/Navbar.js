import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Ninja Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">New Blog</Link>
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#e21717",
            borderRadius: "8px",
          }}
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
