import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>page not found</h2>
      <Link to="/">click to go back home</Link>
    </div>
  );
};

export default NotFound;
