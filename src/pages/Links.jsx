import { Outlet, Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/aggregations">Aggregations</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Links;
