import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Drawer,
  List,
  ListItem,
  Box,
  Popover,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../images/logo.png";
import "./styles/HeaderStyles.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const timeoutId = useRef(null);

  const handleMenuOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleMenuClose = () => {
    clearTimeout(timeoutId.current);
    setAnchorEl(null);
    setMenuType(null);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderMenu = (type) => {
    switch (type) {
      case "about":
        return (
          <>
            <MenuItem className="menu-item" component={NavLink} to="/about">
              About
            </MenuItem>
            <MenuItem className="menu-item" component={NavLink} to="/contact">
              Contact Us
            </MenuItem>
            <MenuItem className="menu-item" component={NavLink} to="/team">
              Our Team
            </MenuItem>
            <MenuItem className="menu-item" component={NavLink} to="/services">
              Services
            </MenuItem>
          </>
        );
      case "visas":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ marginRight: "25px" }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                className="visa-type "
                variant="h6"
              >
                Skilled Visas
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Skilled Independent (Subclass 189)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Skilled Nominated (Subclass 190)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa3">
                    Skilled Work Regional (Subclass 491)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa4">
                    Permanent Residence Regional (Subclass 191)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa5">
                    Skilled Residence (Subclass 887)
                  </Link>
                </li>
              </ul>

              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                className="visa-type"
                variant="h6"
              >
                TEMPORARY ACTIVE VISAS
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Temporary Activity (Subclass 408)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Temporary Work (Short Stay Specialist) (Subclass 400)
                  </Link>
                </li>
              </ul>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                className="visa-type"
                variant="h6"
              >
                EMPLOYER SPONSORED VISAS
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Temporary Skill Shortage (Subclass 482)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Skill Employer Sponsored Regional (Subclass 494)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Employer Nomination (Subclass 186)
                  </Link>
                </li>
              </ul>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                className="visa-type"
              >
                Graduate Visas
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Skilled Temporary Graduate (Subclass 485)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Skilled Recognised Graduate (Subclass 476)
                  </Link>
                </li>
              </ul>

              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                Visitor Visas
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Visitor (Subclass 600)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Electronic Travel Authority (Subclass 601)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    eVisitor (Subclass 651)
                  </Link>
                </li>
              </ul>

              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                Tourist Visas
              </Typography>

              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Work and Holiday (Subclass 462)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Working Holiday (Subclass 417)
                  </Link>
                </li>
              </ul>

              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                STUDENT & TRAINING VISAS
              </Typography>

              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Student (Subclass 500)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Training (Subclass 407)
                  </Link>
                </li>
              </ul>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                Partner Visas
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Onshore Partner (Subclass 820/801)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Offshore Partner (Subclass 309/100)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Prospective Marriage (Subclass 300)
                  </Link>
                </li>
              </ul>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                Parents Visas
              </Typography>
              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Parent (Subclass 103)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Aged Parent (Subclass 804)
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Contributory Parent (Subclass 143)
                  </Link>
                </li>

                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Contributory Parent (Subclass 173)
                  </Link>
                </li>

                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Contributory Aged Parent (Subclass 864)
                  </Link>
                </li>

                <li>
                  <Link className="menu-item-li-a" to="/visa2">
                    Contributory Aged Parent (Subclass 884)
                  </Link>
                </li>
              </ul>
            </Box>
            <Box sx={{ marginRight: "20px" }}></Box>
            <Box>
              <Typography
                sx={{ fontSize: 15, fontWeight: "bold", marginBottom: "10px" }}
                variant="h6"
                className="visa-type"
              >
                Appeals, Review and Cancellations
              </Typography>

              <ul className="menu-item-li">
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    AAT
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    NOICC
                  </Link>
                </li>
                <li>
                  <Link className="menu-item-li-a" to="/visa1">
                    Visa Cancellation
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        );
      case "student":
        return (
          <>
            <MenuItem className="menu-item" component={NavLink} to="/action">
              Action
            </MenuItem>
            <MenuItem
              className="menu-item"
              component={NavLink}
              to="/another-action"
            >
              Another action
            </MenuItem>
            <MenuItem
              className="menu-item"
              component={NavLink}
              to="/something-else"
            >
              Something else here
            </MenuItem>
          </>
        );
      case "profile":
        return (
          <>
            <MenuItem className="menu-item" component={NavLink} to="/account">
              Account
            </MenuItem>
            <MenuItem className="menu-item" component={NavLink} to="/login">
              Login
            </MenuItem>
            <MenuItem className="menu-item" component={NavLink} to="/signup">
              Signup
            </MenuItem>
          </>
        );
      default:
        return null;
    }
  };
  const handleButtonMouseLeave = () => {
    if (!anchorEl) {
      handleMenuClose();
    }
  };

  const handlePopoverMouseLeave = () => {
    if (!anchorEl) {
      handleMenuClose();
    }
  };
  // const toggleDrawerClose = () => {
  //   setDrawerOpen(false);
  // };
  const drawerContent = (
    <Box
      sx={{
        width: 250,
        display: { xs: "block", sm: "block", md: "block", lg: "none" },
      }}
      role="presentation"
      // onClick={toggleDrawerClose}
      // onKeyDown={toggleDrawerClose}
      onClick={(event) => event.stopPropagation()}
    >
      <List>
        <ListItem component={NavLink} to="/">
          <Button component={NavLink} to="/" sx={{ color: "black" }}>
            Home
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/about">
          <Button
            className="nav-button"
            component={NavLink}
            onMouseEnter={(e) => handleMenuOpen(e, "about")}
            onMouseLeave={handleButtonMouseLeave}
            sx={{ color: "black" }}
          >
            About Us <ExpandMoreIcon />
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/visas">
          <Button
            className="nav-button"
            component={NavLink}
            onMouseEnter={(e) => handleMenuOpen(e, "visas")}
            onMouseLeave={handleButtonMouseLeave}
            sx={{ color: "black" }}
          >
            Visas <ExpandMoreIcon />
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/student">
          <Button
            className="nav-button"
            component={NavLink}
            onMouseOver={(e) => handleMenuOpen(e, "student")}
            onMouseLeave={handleButtonMouseLeave}
            sx={{ color: "black" }}
          >
            Student Information Hub <ExpandMoreIcon />
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/blogs">
          <Button sx={{ color: "black" }} component={NavLink} to="/blogs">
            Blogs
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/apply-visa">
          <Button sx={{ color: "black" }} component={NavLink} to="/apply-visa">
            Apply Visa
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/bookanappointment">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#cb0731" }}
            component={NavLink}
            to="/bookanappointment"
          >
            Book An Appointment
          </Button>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/profile"
          sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
        >
          <Button
            className="nav-button"
            sx={{ color: "black" }}
            component={NavLink}
            onMouseOver={(e) => handleMenuOpen(e, "profile")}
            onMouseLeave={handleButtonMouseLeave}
          >
            Profile <ExpandMoreIcon />
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="header">
      <Toolbar
        className="toolbar"
        sx={{ backgroundColor: "white", height: "90px" }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            mr: 5,
          }}
        >
          <NavLink to="/">
            <img
              src={logo}
              alt="Real Migration Logo"
              style={{ height: "55px", width: "100%" }}
            />
          </NavLink>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to="/">
              <img
                src={logo}
                alt="Real Migration Logo"
                style={{ height: "55px", width: "100%" }}
              />
            </NavLink>
            <IconButton sx={{ color: "black" }} onClick={toggleSearch}>
              {<SearchIcon />}
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "none" },
              }}
            >
              <Button
                className="nav-button"
                sx={{ color: "black" }}
                component={NavLink}
                onMouseOver={(e) => handleMenuOpen(e, "profile")}
                onMouseLeave={handleButtonMouseLeave}
              >
                <PersonIcon /> <ExpandMoreIcon />
              </Button>
            </Box>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <React.Fragment>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
                flexWrap: "wrap",
              }}
            >
              <div className="nav-links">
                <Typography
                  className="nav-button"
                  component={NavLink}
                  to="/"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Home
                </Typography>
                <Typography
                  className="nav-button"
                  component={NavLink}
                  sx={{ color: "black", fontWeight: "bold" }}
                  onMouseEnter={(e) => handleMenuOpen(e, "about")}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  About Us <ExpandMoreIcon />
                </Typography>
                <Typography
                  className="nav-button"
                  sx={{ color: "black", fontWeight: "bold" }}
                  component={NavLink}
                  onMouseEnter={(e) => handleMenuOpen(e, "visas")}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  Visas <ExpandMoreIcon />
                </Typography>
                <Typography
                  className="nav-button"
                  sx={{ color: "black", fontWeight: "bold" }}
                  component={NavLink}
                  onMouseOver={(e) => handleMenuOpen(e, "student")}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  Student Information Hub <ExpandMoreIcon />
                </Typography>
                <Typography
                  className="nav-button "
                  sx={{ color: "black", fontWeight: "bold" }}
                  component={NavLink}
                  to="/blogs"
                >
                  Blogs
                </Typography>
                <Typography
                  className="nav-button"
                  sx={{ color: "black", fontWeight: "bold" }}
                  component={NavLink}
                  to="/apply-visa"
                >
                  Apply Visa
                </Typography>
                <Typography
                  className="nav-button"
                  variant="contained"
                  sx={{
                    backgroundColor: "#cb0731",
                    border: "solid",
                    borderColor: "white",
                    padding: "10px",
                    borderRadius: 1,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  component={NavLink}
                  to="/bookanappointment"
                >
                  Book An Appointment
                </Typography>
                <Typography
                  className="nav-button"
                  sx={{ color: "black", fontWeight: "bold" }}
                  component={NavLink}
                  onMouseOver={(e) => handleMenuOpen(e, "profile")}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  Profile <ExpandMoreIcon />
                </Typography>
                <IconButton sx={{ color: "black" }} onClick={toggleSearch}>
                  {<SearchIcon />}
                </IconButton>
              </div>
            </Box>
          </React.Fragment>
        )}
      </Toolbar>
      {isSearchOpen && (
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <div className="search-bar">
            <input
              type="text"
              className="form-control search-bar-text"
              placeholder="Search here -----------"
            />
          </div>
          <IconButton
            sx={{ color: "black", backgroundColor: "white" }}
            onClick={toggleSearch}
          >
            <CloseIcon />
          </IconButton>
        </div>
      )}
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onMouseLeave={handlePopoverMouseLeave}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: { padding: "10px", marginTop: "15px", minWidth: "200px" },
        }}
      >
        {renderMenu(menuType)}
      </Popover>
    </AppBar>
  );
};

export default Header;