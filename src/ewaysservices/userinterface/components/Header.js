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

const Header = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);

  // ====== Language Menu Handlers ======
  const handleLanguageOpen = (event) => setLanguageAnchorEl(event.currentTarget);
  const handleLanguageClose = () => setLanguageAnchorEl(null);

  // ====== Services Menu Handlers ======
  const handleServicesOpen = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);

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
              <MenuItem onClick={handleServicesClose}>Web Development</MenuItem>
              <MenuItem onClick={handleServicesClose}>App Development</MenuItem>
              <MenuItem onClick={handleServicesClose}>SEO Optimization</MenuItem>
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
        <Box>
          <Button
            variant="contained"
            sx={buttonStyle}
            startIcon={<AccountCircleIcon />}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ ...buttonStyle, ml: 2 }}
            startIcon={<AccountCircleIcon />}
          >
            Sign Up
          </Button>
        </Box>
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