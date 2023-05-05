import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BarChartIcon from '@mui/icons-material/BarChart';
import StadiumIcon from '@mui/icons-material/Stadium';
import WcIcon from '@mui/icons-material/Wc';
import "./Nav.css";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const Navbar = () => {
  // This is the SideBar
  const location = useLocation();

  const isLoginPage =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {!isLoginPage && (
        <>
          <GiHamburgerMenu
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            size={40}
            onClick={handleShow}
          />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header style={{ backgroundColor: "black" }}>
              <img
                style={{ marginLeft: "70px", width: "200px" }}
                src={require("../images/logo3.png")}
                alt=""
              />
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: "black" }}>
              <div className="offcanvas-body">
              <Link className="routes" to={"/Your_Arena_Page"}>
              <StadiumIcon />
              
                  Your Arena
                </Link>
                <Link className="routes" to={"/overview"}>
                <CorporateFareIcon />
                  Overview
                </Link>
                <Link className="routes" to={"/Product_Solo_RnD_Page"}>
                <BarChartIcon />
                  Solo
                </Link>
                <Link className="routes" to={"/Product_Tenure_Page"}>
                <BubbleChartIcon />
                  Ratio
                </Link>
                <Link className="routes" to={"/Product_Tenure_Page"}>
                <HourglassBottomIcon />
                  Tenure
                </Link>

                <Link className="routes" to={"/Product_Spend_RnD_Page"}>
                <AttachMoneyIcon />
                   Spend
                </Link>

                <Link className="routes" to={"/Product_Infograpic_Page"}>
                <WcIcon />
                  Infograpic
                </Link>

                <Link className="routes" to={"/Product_Attrition_Page"}>
                <DirectionsRunIcon />
                  Attrition
                </Link>
                <hr style={{ color: "white" }} />
                <Link className="routes" to={"/"}>
                  <SettingsIcon />
                  Setting
                </Link>
                <Link className="routes" to={"/"}>
                  <HelpIcon />
                  Support
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </div>
  );
};

export default Navbar;
