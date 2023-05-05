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

const Product_Spend_Nav = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}> 

    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/Product_Spend_RnD_Page" className="nav-link" style={getNavLinkStyle}>
          RnD
        </NavLink>
        </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Spend_Sales_Page" className="nav-link" style={getNavLinkStyle}>
          Sales
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Spend_Product_Page" className="nav-link" style={getNavLinkStyle}>
          Product
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Spend_Marketing_Page" className="nav-link" style={getNavLinkStyle}>
          Markting
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Spend_HR_Page" className="nav-link" style={getNavLinkStyle}>
          HR
        </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/Product_Spend_Finance_Page" className="nav-link" style={getNavLinkStyle}>
         Finance
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Product_Spend_Ops_Page" className="nav-link" style={getNavLinkStyle}>
          Ops
        </NavLink>
      </Nav.Item>
    </Nav>
     </div>
  );
};

function Product_Spend_Navigation() {
  return <Product_Spend_Nav />;
}

export default Product_Spend_Navigation;
