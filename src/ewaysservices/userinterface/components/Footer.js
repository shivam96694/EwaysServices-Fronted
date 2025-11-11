
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
<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
{matches?'':<div style={{width:matches?'74%':'70%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'auto'}}>

<Grid display={'flex'} alignContent={'center'} justifyContent={'center'} flexDirection={'row'} marginRight={'auto'} >

<Grid  size={4} marginRight={10}  >

<Grid fontWeight={matches?700:599}  fontSize={matches?7:14} marginBottom={2} letterSpacing={2} marginRight={10}>ABOUT EWAYSSERVICES</Grid>
<Grid color={"grey"}  fontSize={matches?7:14} marginBottom={0.5}>Who We Are </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Blog </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Who With Us </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Investor Relations </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Report Fraud</Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Press Kit </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Contact Us </Grid>

</Grid>

<Grid size={4} marginRight={10}>

<Grid fontWeight={matches?700:599}  fontSize={matches?7:14} marginBottom={2} letterSpacing={2} marginRight={10} >FOR SERVICES</Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Partner With us </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Apps For You </Grid>

</Grid>

<Grid size={4} marginRight={'auto'}>

<Grid fontWeight={matches?700:599}  fontSize={matches?7:14} marginBottom={2} letterSpacing={2} >LEARN MORE</Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Privacy </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Security </Grid>
<Grid color={"grey"} fontSize={matches?7:14} marginBottom={0.5}>Teams </Grid>

</Grid>

</Grid>

</div>}

<div style={{width:matches?'100%':'25%',display:'flex',justifyContent:'center',alignItems:'center'}}> 
<Grid size={3} marginRight={'auto'} height={matches?135:225}>
<Grid fontWeight={matches?700:599}  fontSize={matches?7:14} marginBottom={2} marginTop={3} letterSpacing={2} >SOCIAL LINKS</Grid>
<div style={{display:'flex',marginBottom:10}}>
<Grid><img src={ld} style={{width:matches?15:20,marginRight:8}}/></Grid>
<Grid><img src={intragram} style={{width:matches?15:20,marginRight:8}}/></Grid>
<Grid><img src={x} style={{width:matches?15:20}}/></Grid>
<Grid><img src={yt} style={{width:matches?25:35,marginTop:matches?-3:-8}}/></Grid>
<Grid><img src={fb} style={{width:matches?15:20}}/></Grid>
</div>

<div>
  <Grid><img src={ps} style={{width:matches?90:130,marginRight:8,marginBottom:10}}/></Grid>
  <Grid><img src={as} style={{width:matches?90:130,marginRight:8}}/></Grid>
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



/*
import logo from "../../../../assets/footer.jpg";
import flag from "../../../../assets/indianflag.jpg";
import flag2 from "../../../../assets/uae.webp";
import fb from "../../../../assets/facebook.jpg";
import x from "../../../../assets/x.jpg";
import yt from "../../../../assets/yt.jpg";
import ld from "../../../../assets/link.jpg";
import intragram from "../../../../assets/intragram.jpg";
import ps from "../../../../assets/playstore.webp";
import as from "../../../../assets/appstore.webp";
import global from "../../../../assets/global.jpg";
import { MenuItem, Grid, Box, Typography, Button, Menu } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function Footer() {
  const [countryAnchorEl, setCountryAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({ name: "India", flag: flag });
  const [selectedLanguage, setSelectedLanguage] = useState({ languagename: "English", languageflag: global });

  const isCountryMenuOpen = Boolean(countryAnchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);

  const handleCountryClick = (event) => setCountryAnchorEl(event.currentTarget);
  const handleCountryClose = () => setCountryAnchorEl(null);

  const handleLanguageClick = (event) => setLanguageAnchorEl(event.currentTarget);
  const handleLanguageClose = () => setLanguageAnchorEl(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    handleCountryClose();
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    handleLanguageClose();
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#f8f8f8", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
      <Box sx={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
          <img src={logo} style={{ width: "40%" }} alt="logo" />
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            <Button variant="outlined" onClick={handleCountryClick} endIcon={<KeyboardArrowDownIcon />}>
              <img src={selectedCountry.flag} alt="flag" style={{ width: 20, marginRight: 10 }} />
              {selectedCountry.name}
            </Button>
            <Menu anchorEl={countryAnchorEl} open={isCountryMenuOpen} onClose={handleCountryClose}>
              <MenuItem onClick={() => handleCountryChange({ name: "India", flag: flag })}>
                <img src={flag} alt="India" style={{ width: 20, marginRight: 10 }} /> India
              </MenuItem>
              <MenuItem onClick={() => handleCountryChange({ name: "UAE", flag: flag2 })}>
                <img src={flag2} alt="UAE" style={{ width: 20, marginRight: 10 }} /> UAE
              </MenuItem>
            </Menu>
            <Button variant="outlined" onClick={handleLanguageClick} endIcon={<KeyboardArrowDownIcon />}>
              <img src={selectedLanguage.languageflag} alt="lang" style={{ width: 20, marginRight: 10 }} />
              {selectedLanguage.languagename}
            </Button>
            <Menu anchorEl={languageAnchorEl} open={isLanguageMenuOpen} onClose={handleLanguageClose}>
              <MenuItem onClick={() => handleLanguageChange({ languagename: "English", languageflag: global })}>
                <img src={global} alt="English" style={{ width: 20, marginRight: 10 }} /> English
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange({ languagename: "Hindi", languageflag: global })}>
                <img src={global} alt="Hindi" style={{ width: 20, marginRight: 10 }} /> Hindi
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Grid container spacing={3} mt={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">ABOUT RESTROBUDDYAPP</Typography>
            <Typography color="gray">Who We Are</Typography>
            <Typography color="gray">Blog</Typography>
            <Typography color="gray">Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">FOR RESTAURANTS</Typography>
            <Typography color="gray">Partner With Us</Typography>
            <Typography color="gray">Apps For You</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">LEARN MORE</Typography>
            <Typography color="gray">Privacy</Typography>
            <Typography color="gray">Security</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">SOCIAL LINKS</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img src={ld} alt="LinkedIn" style={{ width: 20 }} />
              <img src={intragram} alt="Instagram" style={{ width: 20 }} />
              <img src={x} alt="Twitter" style={{ width: 20 }} />
              <img src={yt} alt="YouTube" style={{ width: 30 }} />
              <img src={fb} alt="Facebook" style={{ width: 20 }} />
            </Box>
            <Box mt={2}>
              <img src={ps} alt="Play Store" style={{ width: 130, marginBottom: 10 }} />
              <img src={as} alt="App Store" style={{ width: 130 }} />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", mt: 3, borderBottom: "1px solid #ccc" }} />
        <Typography color="gray" mt={2} fontSize={14} textAlign="center">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © RestroBuddy™ Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
*/


/*
import logo from "../../../../assets/footer.jpg"
import flag from "../../../../assets/indianflag.jpg"
import flag2 from "../../../../assets/uae.webp"
import fb from "../../../../assets/facebook.jpg"
import x from "../../../../assets/x.jpg"
import yt from "../../../../assets/yt.jpg"
import ld from "../../../../assets/link.jpg"
import intragram from "../../../../assets/intragram.jpg"
import ps from "../../../../assets/playstore.webp"
import as from "../../../../assets/appstore.webp"
import global from "../../../../assets/global.jpg"
import { MenuItem, Grid, useMediaQuery, useTheme } from "@mui/material"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
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
    const [selectedLanguage, setSelectedLanguage] = useState({ languagename: 'English', languageflag: global });
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

    const showFooter = () => {
        return (
            <div style={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f8f8f8',
                padding: isMobile ? '20px 0' : '40px 0'
            }}> 
                <div style={{
                    width: isMobile ? '90%' : isTablet ? '85%' : '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        width: '100%',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        marginBottom: isMobile ? 20 : 0
                    }}>
                        <div style={{ marginRight: 'auto', marginBottom: isMobile ? 20 : 0 }}>
                            <img src={logo} style={{ width: isMobile ? '70%' : '50%' }} alt="logo" />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: isMobile ? 0 : 'auto',
                            marginTop: isMobile ? 0 : -50,
                            flexDirection: isMobile ? 'column' : 'row',
                            width: isMobile ? '100%' : 'auto'
                        }}>
                            <Button 
                                variant="contained" 
                                style={{
                                    background: '#fff',
                                    color: '#000',
                                    border: '1px solid gray',
                                    borderRadius: '1.5',
                                    marginRight: isMobile ? 0 : 10,
                                    marginBottom: isMobile ? 10 : 0,
                                    width: isMobile ? '100%' : 'auto'
                                }}  
                                onClick={handleCountryClick} 
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <img src={selectedCountry.flag} style={{ width: 20, marginRight: 10 }} alt="country flag"/>
                                {selectedCountry.name}
                            </Button> 
                            
                            <StyledMenu
                                id="country-menu"
                                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                                anchorEl={countryAnchorEl}
                                open={isCountryMenuOpen}
                                onClose={handleCountryClose}
                            >
                                <MenuItem onClick={() => handleCountryChange({ name: 'India', flag: flag })} disableRipple>
                                    <img src={flag} style={{ width: 20, marginRight: 10 }} alt="india flag"/>India
                                </MenuItem>
                                <MenuItem onClick={() => handleCountryChange({ name: 'UAE', flag: flag2 })} disableRipple>
                                    <img src={flag2} style={{ width: 20, marginRight: 10 }} alt="uae flag"/>UAE
                                </MenuItem>
                            </StyledMenu>

                            <Button 
                                variant="contained" 
                                style={{
                                    background: '#fff',
                                    color: '#000',
                                    border: '1px solid gray',
                                    borderRadius: '1.5',
                                    marginLeft: isMobile ? 0 : 10,
                                    width: isMobile ? '100%' : 'auto'
                                }}  
                                onClick={handleLanguageClick} 
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                <img src={selectedLanguage.languageflag} style={{ width: 20, marginRight: 10 }} alt="language icon"/>
                                {selectedLanguage.languagename}
                            </Button> 
                            
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                                anchorEl={languageAnchorEl}
                                open={isLanguageMenuOpen}
                                onClose={handleLanguageClose}
                            >
                                <MenuItem onClick={() => handleLanguageChange({ languagename: 'English', languageflag: global })} disableRipple>
                                    <img src={global} style={{ width: 20, marginRight: 10 }} alt="global icon"/>English
                                </MenuItem>
                                <MenuItem onClick={() => handleLanguageChange({ languagename: 'Hindi', languageflag: global })} disableRipple>
                                    <img src={global} style={{ width: 20, marginRight: 10 }} alt="global icon"/>Hindi
                                </MenuItem>
                            </StyledMenu>
                        </div>
                    </div>

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginTop: 20,
                        flexDirection: isMobile ? 'column' : 'row'
                    }}>
                        <div style={{
                            width: isMobile ? '100%' : '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginRight: isMobile ? 0 : 'auto',
                            flexWrap: isMobile ? 'wrap' : 'nowrap'
                        }}>
                            <Grid item xs={6} sm={3} style={{ marginBottom: isMobile ? 20 : 0 }}>
                                <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2 }}>ABOUT RESTROBUDDYAPP</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Who We Are </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Blog </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Who With Us </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Investor Relations </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Report Fraud</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Press Kit </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Contact Us </div>
                            </Grid>

                            <Grid item xs={6} sm={3} style={{ marginBottom: isMobile ? 20 : 0 }}>
                                <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2, marginTop: isMobile ? 0 : 3 }}>RESTROVERSE</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>RestroBuddy </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Blinlit </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>District </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Feeding India </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Hyperpure</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>RestroBuddy Live </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Restroland </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Weather Union </div>
                            </Grid>

                            <Grid item xs={6} sm={3} style={{ marginBottom: isMobile ? 20 : 0 }}>
                                <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2, marginTop: isMobile ? 0 : -13.5 }}>FOR RESTAURANTS</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Partner With us </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Apps For You </div>
                            </Grid>

                            <Grid item xs={6} sm={3} style={{ marginBottom: isMobile ? 20 : 0 }}>
                                <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2, marginTop: isMobile ? 0 : -13.5 }}>LEARN MORE</div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Privacy </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Security </div>
                                <div style={{ color: "grey", marginBottom: 8 }}>Teams </div>
                            </Grid>
                        </div>

                        {!isMobile && (
                            <div style={{
                                width: '20%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start'
                            }}> 
                                <Grid item xs={12} sm={3}>
                                    <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2, marginTop: -6.5 }}>SOCIAL LINKS</div>
                                    <div style={{ display: 'flex', marginBottom: 10 }}>
                                        <img src={ld} style={{ width: 20, marginRight: 8 }} alt="linkedin"/>
                                        <img src={intragram} style={{ width: 20, marginRight: 8 }} alt="instagram"/>
                                        <img src={x} style={{ width: 20 }} alt="twitter"/>
                                        <img src={yt} style={{ width: 35, marginTop: -8 }} alt="youtube"/>
                                        <img src={fb} style={{ width: 20 }} alt="facebook"/>
                                    </div>

                                    <div>
                                        <img src={ps} style={{ width: 130, marginRight: 8, marginBottom: 10 }} alt="play store"/>
                                        <img src={as} style={{ width: 130, marginRight: 8 }} alt="app store"/>
                                    </div>
                                </Grid>
                            </div>
                        )}

                        {isMobile && (
                            <div style={{ width: '100%', marginTop: 20 }}>
                                <div fontWeight={599} style={{ fontSize: 14, marginBottom: 15, letterSpacing: 2 }}>SOCIAL LINKS</div>
                                <div style={{ display: 'flex', marginBottom: 20 }}>
                                    <img src={ld} style={{ width: 20, marginRight: 8 }} alt="linkedin"/>
                                    <img src={intragram} style={{ width: 20, marginRight: 8 }} alt="instagram"/>
                                    <img src={x} style={{ width: 20 }} alt="twitter"/>
                                    <img src={yt} style={{ width: 35, marginTop: -8 }} alt="youtube"/>
                                    <img src={fb} style={{ width: 20 }} alt="facebook"/>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <img src={ps} style={{ width: 130, marginBottom: 10 }} alt="play store"/>
                                    <img src={as} style={{ width: 130 }} alt="app store"/>
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ 
                        width: '100%', 
                        marginTop: 30, 
                        borderBottom: '1px solid #ccc',
                        marginBottom: 20 
                    }} />
                    
                    <div style={{
                        width: '100%',
                        color: 'gray',
                        marginBottom: 20,
                        fontSize: isMobile ? 12 : 14,
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © RestroBuddy™ Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div style={{
            width: '100%',
            justifyContent: 'center',
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ display: "flex", flexWrap: 'wrap', width: "100%" }}>
                {showFooter()}
            </div>
        </div>
    )
}*/