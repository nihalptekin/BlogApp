import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import { orange } from "@mui/material/colors";

import logo from "../assest/Yellow Typography Hoppy Easter Card.png";
import { current } from "@reduxjs/toolkit";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  const { login, logout } = useAuthCalls();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/about")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleDashboardClick = () => {
    navigate("/");
  };

  const handleMyBlogClick = () => {
    navigate("/my-blogs");
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleProfileClick=()=>{
    navigate("/profile")
  }


  const navbarStyle = {
    backgroundColor: "#b388ff",
    height: 100,

  };

  const typographyStyle = {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 600,
    fontSize: 25,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    mb: 5

  };

  return (
    <div>
      <AppBar position="static" sx={navbarStyle}>
        <Container sx={{ marginTop: 3 }} maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logo}
              style={{ width: 70, height: 70, borderRadius: 80, marginTop:-45 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={typographyStyle}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={handleDashboardClick}
                    sx={typographyStyle}
                  >
                    DASHBOARD
                  </Typography>
                </MenuItem>

                <Link to="/new-blog">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">NEWBLOG</Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">ABOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLOGGER
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button onClick={handleDashboardClick} sx={typographyStyle}>
                DASHBOARD
              </Button>

              <Button
                onClick={() => navigate("/new-blog")}
                sx={typographyStyle}
              >
                NEW BLOG
              </Button>
              <Button
                onClick={()=>navigate("/about")}
                sx={typographyStyle}
              >
                ABOUT
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt=""
                    src={currentUser ? currentUser.image : "/static/images/avatar/2.jpg"} 
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "white",
                      color: "orange",
                      marginTop:-6
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {currentUser ? (
                  <>
                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleMyBlogClick}
                      >
                        My Blogs
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleProfileClick}
                      >
                        Profile
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLoginClick}>
                        Login
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleRegisterClick}
                      >
                        Register
                      </Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
