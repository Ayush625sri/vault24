import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCart4 } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth.jsx";
import { useCart } from "../../context/cart.jsx";
import SearchInput from "../Form/SearchInput.jsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import { Brightness4, Brightness7, Gradient, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const { darkMode, toggleTheme } = useTheme(); // Use ThemeContext
  const navRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth({ ...auth, user: null, token: "" });
    toast.success("Logout Successfully");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div >
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: darkMode ? "#0c0a09" : "#1976D2" }}>
      {/* <AppBar position="fixed" className="bg-gradient-to-r from-blue-500 to-green-600 shadow-xl" > */}

        <Toolbar className="flex justify-between ">
          <div className="flex items-center gap-4">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{display: isLargeScreen ?  "none" : "inline"}}
            >
              <MenuIcon  />
            </IconButton>
            <GiClockwork className="text-3xl" />
            <NavLink to="/" className="font-semibold text-2xl tracking-tighter">
              VAULT24
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-mono">
            <SearchInput />
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/categories" className="hover:underline">Categories</NavLink>

            {!auth.user ? (
              <NavLink to="/login" className="hover:underline">
                Login
                <RiArrowDropDownFill className="inline" onClick={handleMenu} />
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} component={NavLink} to="/login">Sign In</MenuItem>
                  <MenuItem onClick={handleClose} component={NavLink} to="/register">Register</MenuItem>
                </Menu>
              </NavLink>
            ) : (
              <NavLink
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user/profile"}`}
                className="hover:underline"
              >
                {auth.user.name}
                <RiArrowDropDownFill className="inline" onClick={handleMenu} />
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem component={NavLink} to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </NavLink>
            )}
            <Badge badgeContent={cart?.length} color="secondary">
              <NavLink to="/cart" className="flex items-center">
                <BsCart4 className="text-2xl" />
                <span className="ml-1"></span>
              </NavLink>
            </Badge>
          </div>

          <div className="flex items-center">
            {/* <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton> */}
          </div>
        </Toolbar>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" ref={navRef}>
            <SearchInput />

            <NavLink to="/" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Home</NavLink>
            <NavLink to="/categories" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Categories</NavLink>
            {!auth.user ? (
              <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Login</NavLink>
            ) : (
              <>
                <NavLink
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user/profile"}`}
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                >
                  Dashboard
                </NavLink>
                <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Logout</button>
              </>
            )}
            <NavLink to="/cart" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Cart</NavLink>
          </div>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
