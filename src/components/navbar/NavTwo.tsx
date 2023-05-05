import { Nav } from "react-bootstrap";
import { NavLink, NavLinkProps } from "react-router-dom";
import { CSSProperties } from "react";
import { duration } from "@mui/material";

interface NavLinkStyleProps {
  isActive: boolean;
  isPending: boolean;
}

const activeStyle: CSSProperties = {
  color: "black",
  backgroundColor: "rgba(217, 217, 217)",
};

const getNavLinkStyle = ({
  isActive,
  isPending,
}: NavLinkStyleProps): CSSProperties | undefined => {
  if (isActive) {
    return activeStyle;
  }

  return undefined;
};

const NavTwo = () => {
  return (

    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/Product_Solo_RnD_Page" className="nav-link" style={getNavLinkStyle}>
          RnD
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Solo_Sales_Page" className="nav-link" style={getNavLinkStyle}>
          Sales
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Solo_Product_Page" className="nav-link" style={getNavLinkStyle}>
          Product
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Product_Solo_Marketing_Page" className="nav-link" style={getNavLinkStyle}>
          Marketing
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Product_Solo_HR_Page" className="nav-link" style={getNavLinkStyle}>
          HR
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Product_Solo_Finance_Page" className="nav-link" style={getNavLinkStyle}>
        Finance
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Solo_Ops_Page" className="nav-link" style={getNavLinkStyle}>
        Ops
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

function Navigation() {
  return <NavTwo />;
}

export default Navigation;
