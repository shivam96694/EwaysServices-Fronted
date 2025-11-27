import { useNavigate } from "react-router-dom";
import logo from "../../../assets/eway2.png"
import flag from "../../../assets/indianflag.jpg"
import flag2 from "../../../assets/uae.webp"
import fb from "../../../assets/facebook.jpg"
import x from "../../../assets/x.jpg"
import yt from "../../../assets/yt.jpg"
import ld from "../../../assets/link.jpg"
import intragram from "../../../assets/intragram.jpg"
import ps from "../../../assets/playstore.webp"
import as from "../../../assets/appstore.webp"
import global from "../../../assets/global.jpg"
import {  MenuItem, Grid } from "@mui/material"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"
export default function Footer()
{   
const navigate = useNavigate();
const handleNavigation = (path) => {
  navigate(path);
  window.scrollTo(0, 0); // optional: scroll to top
};

  var theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));

    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color: 'rgb(55, 65, 81)',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
          }),
        },
      }));
      
      const [countryAnchorEl, setCountryAnchorEl] = useState(null);
    const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
      const [selectedCountry, setSelectedCountry] = useState({ name: 'India', flag: flag });
      const [selectedLanguage, setSelectedLanguage] = useState({ languagename: 'English', languageflag:global });
      const isCountryMenuOpen = Boolean(countryAnchorEl);
      const isLanguageMenuOpen = Boolean(languageAnchorEl);
     
      const handleCountryClick = (event) => {
        setCountryAnchorEl(event.currentTarget);
    };
    const handleCountryClose = () => {
        setCountryAnchorEl(null);
    };

    const handleLanguageClick = (event) => {
        setLanguageAnchorEl(event.currentTarget);
    };
    const handleLanguageClose = () => {
        setLanguageAnchorEl(null);
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        handleCountryClose();
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        handleLanguageClose();
    };


    

    const showFooter=()=>{
        return(<div style={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',background:'#f8f8f8'}}> 
 <div style={{width:matches?'95%':'80%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',width:'100%'}}>
  
 <div style={{marginRight:'auto',width:'20%'}}>
    <img src={logo} style={{objectFit:'contain',width:matches?'80%':'40%'}} />
    </div>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'auto',width:matches?'70%':''}}>

<Button  variant="contained" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:matches?10:15,background:'#fff',color:'#000',border:'1px solid gray',borderRadius:'1.5',marginRight:matches?5:10,width:matches?'39%':'40%'}}  onClick={handleCountryClick} endIcon={<KeyboardArrowDownIcon />}><img src={selectedCountry.flag} style={{width:matches?'14%':20,marginRight:10}}/>{selectedCountry.name}</Button> 
<StyledMenu  id="country-menu"  MenuListProps={{    'aria-labelledby': 'demo-customized-button',   }}   anchorEl={countryAnchorEl} open={isCountryMenuOpen}  onClose={handleCountryClose}    >
<MenuItem onClick={() => handleCountryChange({ name: 'India', flag: flag })} disableRipple>
<img src={flag} style={{width:20,marginRight:10}}/>India
</MenuItem>
        <MenuItem onClick={() => handleCountryChange({ name: 'UAE', flag: flag2 })} disableRipple>
        <img src={flag2} style={{width:20,marginRight:10}}/>UAE
        </MenuItem>
      </StyledMenu>



    
<Button  variant="contained" style={{fontSize:matches?9:15,background:'#fff',color:'#000',border:'1px solid gray',borderRadius:'1.5',marginLeft:matches?5:10,width:matches?'39%':'47%'}}  onClick={handleLanguageClick} endIcon={<KeyboardArrowDownIcon  />}><img src={selectedLanguage.languageflag} style={{width:matches?'15%':20,marginRight:10}}/>{selectedLanguage.languagename}</Button> 
<StyledMenu  id="demo-customized-menu"  MenuListProps={{    'aria-labelledby': 'demo-customized-button',   }}   anchorEl={languageAnchorEl} open={isLanguageMenuOpen}  onClose={handleLanguageClose}    >
<MenuItem onClick={() => handleLanguageChange({ languagename: 'English', languageflag: global })} disableRipple>
<img src={global} style={{width:20,marginRight:10}}/>English
</MenuItem>
        <MenuItem onClick={() => handleLanguageChange({ languagename: 'Hindi', languageflag: global })} disableRipple>
        <img src={global} style={{width:20,marginRight:10}}/>Hindi
        </MenuItem>
      </StyledMenu>

      </div>

      </div>
<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
{matches?
<div style={{width:'100%'}}>
<Grid fontWeight={matches?700:599}  fontSize={matches?9:14} marginBottom={2} letterSpacing={2} marginRight={10}>ABOUT EWAYSSERVICES</Grid>
<Grid color={"grey"}  fontSize={matches?12:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}  onClick={() => handleNavigation("/about")}  >Who We Are </Grid>
<Grid color={"grey"} fontSize={matches?12:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}  onClick={() => handleNavigation("/blog")}>Blog </Grid>
<Grid color={"grey"} fontSize={matches?12:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }} onClick={() => handleNavigation("/team")}>Who With Us </Grid>
<Grid color={"grey"} fontSize={matches?12:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}   onClick={() => handleNavigation("/contact")}>Contact Us </Grid>
</div>

:<div style={{width:matches?'74%':'70%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'auto'}}>

<Grid display={'flex'} alignContent={'center'} justifyContent={'center'} flexDirection={'row'} marginRight={'auto'} marginBottom={7.5} >

<Grid  size={4} marginRight={10}  >

<Grid fontWeight={matches?700:599}  fontSize={matches?7:14} marginBottom={2} letterSpacing={2} marginRight={10}>ABOUT EWAYSSERVICES</Grid>
<Grid color={"grey"}  fontSize={matches?7:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}  onClick={() => handleNavigation("/about")}  >Who We Are </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}  onClick={() => handleNavigation("/blog")}>Blog </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }} onClick={() => handleNavigation("/team")}>Who With Us </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={1} sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}   onClick={() => handleNavigation("/contact")}>Contact Us </Grid>

</Grid>
<Grid size={4} marginRight={10}>
  <Grid
    fontWeight={matches ? 700 : 599}
    fontSize={matches ? 7 : 14}
    marginBottom={2}
    letterSpacing={2}
    marginRight={10}
  >
    FOR SERVICES
  </Grid>
  <Grid
    color={"grey"}
    fontSize={matches ? 7 : 14}
    marginBottom={1}
    sx={{
      cursor: "pointer",
      "&:hover": { color: "#00a8ff", textDecoration: "underline" },
    }}
    onClick={() => handleNavigation("/partner")}
  >
    Partner With Us
  </Grid>
  <Grid
    color={"grey"}
    fontSize={matches ? 7 : 14}
    marginBottom={1}
    sx={{
      cursor: "pointer",
      "&:hover": { color: "#00a8ff", textDecoration: "underline" },
    }}
    onClick={() => handleNavigation("/apps")}
  >
    Apps For You
  </Grid>
</Grid><Grid size={4} marginRight={"auto"}>
  <Grid
    fontWeight={matches ? 700 : 599}
    fontSize={matches ? 7 : 14}
    marginBottom={2}
    letterSpacing={2}
  >
    LEARN MORE
  </Grid>

  <Grid
    color={"grey"}
    fontSize={matches ? 7 : 14}
    marginBottom={1}
    sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}
    onClick={() => handleNavigation("/legal#privacy")}
  >
    Privacy
  </Grid>

  <Grid
    color={"grey"}
    fontSize={matches ? 7 : 14}
    marginBottom={1}
    sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}
    onClick={() => handleNavigation("/legal#security")}
  >
    Security
  </Grid>

  <Grid
    color={"grey"}
    fontSize={matches ? 7 : 14}
    marginBottom={1}
    sx={{ cursor: "pointer", "&:hover": { color: "#00a8ff", textDecoration: "underline" } }}
    onClick={() => handleNavigation("/legal#policies")}
  >
    Policies
  </Grid>
</Grid>


</Grid>

</div>}

<div style={{width:matches?'100%':'25%',display:'flex',justifyContent:'center',alignItems:'center'}}> 
<Grid size={3} marginRight={'auto'} height={matches?135:225}>
<Grid fontWeight={matches?'bolder':599}  fontSize={matches?9:14} marginBottom={2} marginTop={matches?1.5:2.2} letterSpacing={2} >SOCIAL LINKS</Grid>
<div style={{display:'flex',marginBottom:10}}>
<Grid><img src={ld} style={{width:matches?17:20,marginRight:8}}/></Grid>
<Grid><img src={intragram} style={{width:matches?17:20,marginRight:8}}/></Grid>
<Grid><img src={x} style={{width:matches?17:20}}/></Grid>
<Grid><img src={yt} style={{width:matches?32:35,marginTop:matches?-6:-8}}/></Grid>
<Grid><img src={fb} style={{width:matches?17:20}}/></Grid>
</div>

<div>
  <Grid><img src={ps} style={{width:matches?100:130,marginRight:8,marginBottom:10}}/></Grid>
  <Grid><img src={as} style={{width:matches?100:130,marginRight:8,marginBottom:10}}/></Grid>
</div>

</Grid>

</div>

</div>



<div style={{ width: '100%', marginTop: 30, borderBottom: '1px solid #ccc',marginBottom:20 }} />
<div style={{width:'100%',color:'gray',marginBottom:20,fontSize:matches?10:14}}>
By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © EwaysServices Ltd. All rights reserved.
</div>

 </div>
        </div>)
    }
    return(<div style={{width:'100%',justifyContent:'center',display:"flex",flexDirection:'column',alignItems:'center'}}>
        <div style={{display:"flex",flexWrap:'wrap',width:"100%"}}>
     {showFooter()}
     </div>
 </div>)
}

