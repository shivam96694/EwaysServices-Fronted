


import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import logo from '../../../../assets/ChatGPT Image Nov 6, 2025, 01_53_39 PM.png';
import Footer from "../Footer";
import BlogPageComponents from '../BlogPageComponents'
import { useLocation, useParams, Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BlogPage()
{    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


    return (<div >

         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:70}}>
    <Header   />
    </div>

 

          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <BlogPageComponents   />
    </div>

 <div style={{width:matches?'115%':'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <WhyChooseUs  />
    </div>

      <div style={{width:matches?'115%':'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <UserQuery  />
    </div>
  



{
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Footer />
</div>
} 

    </div>)
}