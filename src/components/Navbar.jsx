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
import { orange } from '@mui/material/colors';

import logo from "../assest/Yellow Typography Hoppy Easter Card.png"


const pages = ["Dashboard", "New Blog", "About"];
const settings = ["My Blogs", "Profile", "Logout"];

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

const navbarStyle={
  backgroundColor:"#b388ff", 
  height:200,


}

const typographyStyle ={

    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 600,
    fontSize:25 ,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",

}

  return (
    <div> 
    <AppBar position="static"  sx={navbarStyle} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
        <img src={logo} style={{width:100, height:100, borderRadius:80, marginTop:"100px", justifyContent:"start",   marginLeft:150}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={typographyStyle}
          >
       
          </Typography>

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
                <Typography textAlign="center" onClick={handleDashboardClick}
                sx={typographyStyle}>
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleDashboardClick}
              sx={ typographyStyle}
            >
              DASHBOARD
            </Button>

            <Button
              onClick={()=>navigate("/new-blog")}

              sx={ typographyStyle}
            >
              NEW BLOG
            </Button>
            <Button
              // onClick={handle}
              sx={ typographyStyle}
            >
              ABOUT
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" sx={{width:70, height:70, backgroundColor:"white", color:"orange"}} />
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handleLoginClick}>
                  Login
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" onClick={handleRegisterClick}>
                  Register
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" onClick={handleMyBlogClick}>
                  My Blogs
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" onClick={handleRegisterClick}>
                  Profile
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" onClick={handleLogoutClick}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar></div>
   
  );
}
export default Navbar;
