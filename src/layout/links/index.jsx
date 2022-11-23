import { Outlet, Link } from "react-router-dom";

import { Header, StyledLink } from "./style";
import { useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header>
        <StyledLink activeLink={pathname === "/"}>
          <Link to="/">Home</Link>
        </StyledLink>
        <StyledLink activeLink={pathname.startsWith("/charts")}>
          <Link to="/charts">Charts</Link>
        </StyledLink>
        <StyledLink activeLink={pathname.startsWith("/aggregations")}>
          <Link to="/aggregations">Aggregations</Link>
        </StyledLink>
      </Header>

      <Outlet />
    </>
  );
};

export default Links;
