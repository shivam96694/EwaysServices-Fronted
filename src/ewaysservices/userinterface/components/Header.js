import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/eway2.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import SignUp from "./SignUp";
import Login from './Login';
import Otp from "./Otp";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);


   const [loginOpen,setLoginOpen]=useState(false)
  const [signUpOpen,setSignUpOpen]=useState(false)
    const [otpOpen,setOtpOpen]=useState(false)
    const [otpValue,setOtpValue]=useState('')
    const [userData,setUserData]=useState({})
        const [statusScreen,setStatusScreen]=useState('')
  // ====== Language Menu Handlers ======
  const handleLanguageOpen = (event) => setLanguageAnchorEl(event.currentTarget);
  const handleLanguageClose = () => setLanguageAnchorEl(null);
 var user=useSelector((state)=>state.user)
const dispatch = useDispatch();

  // ====== Services Menu Handlers ======
  const handleServicesOpen = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);
   
  var theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderBottom: "2px solid #eee",
        px: { xs: 2, md: 6 },
        
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 70,mb:1.3 }}>
        {/* Left Logo */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <Box
            component="img"
            src={logo}
            alt="Eways Logo"
            sx={{
              width: 65,
              height: 65,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, letterSpacing: 0.5 }}
          >
            EwaysServices
          </Typography>
        </Box>

        {/* ===== Navigation ===== */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <NavItem title="Home" href="/" />
          
          {/* Services Dropdown */}
          <Box
            onMouseEnter={handleServicesOpen}
            onMouseLeave={handleServicesClose}
          >
            <Box sx={{ ...navLinkStyle, display: "flex", alignItems: "center" }}>
              Services <ArrowDropDownIcon fontSize="small" />
            </Box>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesClose}
              MenuListProps={{
                onMouseLeave: handleServicesClose,
              }}
            >
            <MenuItem
  onClick={() => {
    handleServicesClose();
    document.getElementById("services-section")?.scrollIntoView({
      behavior: 'smooth',
    });
  }}
>
  Web Development
</MenuItem>

<MenuItem
  onClick={() => {
    handleServicesClose();
    document.getElementById("services-section")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  App Development
</MenuItem>

<MenuItem
  onClick={() => {
    handleServicesClose();
    document.getElementById("services-section")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  SEO Optimization
</MenuItem>

<MenuItem
  onClick={() => {
    handleServicesClose();
    document.getElementById("services-section")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Other Services
</MenuItem>
</Menu>
          </Box>

          <NavItem title="Career" href="/career" />

          {/* Language Dropdown */}
          <Box
            onMouseEnter={handleLanguageOpen}
            onMouseLeave={handleLanguageClose}
          >
            <Box sx={{ ...navLinkStyle, display: "flex", alignItems: "center" }}>
              English <ArrowDropDownIcon fontSize="small" />
            </Box>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
              MenuListProps={{
                onMouseLeave: handleLanguageClose,
              }}
            >
              <MenuItem onClick={handleLanguageClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Hindi</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Marathi</MenuItem>
            </Menu>
          </Box>

          <NavItem title="About Us" href="/about" />
          <NavItem title="Contact Us" href="/contact" />
        </Box>

        {/* ===== Buttons ===== */}
  {!user?.username ? (
  <>
    <Box>
      <Button
        variant="contained"
        sx={buttonStyle}
        startIcon={<AccountCircleIcon />}
        onClick={() => setLoginOpen(true)}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{ ...buttonStyle, ml: 2 }}
        startIcon={<AccountCircleIcon />}
        onClick={() => setSignUpOpen(true)}
      >
        Sign Up
      </Button>

      <Login
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        userData={userData}
        setUserData={setUserData}
        setStatusScreen={setStatusScreen}
        statusScreen={statusScreen}
      />
      <SignUp
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        userData={userData}
        setUserData={setUserData}
        setStatusScreen={setStatusScreen}
        statusScreen={statusScreen}
      />
      <Otp
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        userData={userData}
        setUserData={setUserData}
      />
    </Box>
  </>
) : (
  <div
    style={{
      marginRight: 30,
      fontFamily: "sans-serif",
      fontSize: 18,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontWeight: "bold",
    }}
  >
    <span>{user.username}</span>
    <Button
      variant="outlined"
      color="error"
      size="small"
      sx={{
        textTransform: "none",
        fontWeight: "600",
        borderRadius: "10px",
      }}
      onClick={() => {
        dispatch({ type: "DELETE_USER" });
        localStorage.removeItem("user");
        Swal.fire({
          title: "Logged out successfully!",
          icon: "success",
          timer: 2000,
          toast: true,
         
          showConfirmButton: false,
        });
      }}
    >
      Logout
    </Button>
  </div>
)}

      </Toolbar>
    </AppBar>
  );
};

// Reusable Nav Item Component
const NavItem = ({ title, href }) => (
  <a href={href} className="nav-link" style={navLinkStyle}>
    {title}
  </a>
);

// ===== Styles =====
const navLinkStyle = {
  textDecoration: "none",
  color: "#000",
  fontWeight: 550,
  fontSize: "16px",
  padding: "8px 14px",
  borderRadius: "6px",
  transition: "0.2s",
  cursor: "pointer",
};

const buttonStyle = {
  backgroundColor: "#00a8ff",
  borderRadius: "20px",
  px: 2,
  minWidth: 120,
  color: "#000",
  fontSize: "16px",
  fontWeight: 500,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#00a8ff",
    boxShadow: "none",
    transform: "scale(1.03)",
  },
};

export default Header;




/*
export default function Header(){
    return(<div style={{display:"flex",width:'100%',height:50,alignItems:'center'}}>
<div style={{alignItems:"center",display:"flex",width:"20%",justifyContent:'right',marginTop:10}}>
<img src={eways1} style={{objectFit:'cover',width:'50%',height:'50%',borderRadius:'50%'}} />
</div>

    </div>)
}*/