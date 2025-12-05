


import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import logo from '../../../../assets/ChatGPT Image Nov 6, 2025, 01_53_39 PM.png';
import EwaysServicesComponents from '../EwayServicesComponents';
import Footer from "../Footer";
import ServiceDetails from "./ServiceComponent";
import { useLocation, useParams, Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ServicePage()
{   const { serviceId } = useParams();
  const { state } = useLocation(); // data passed from navigation
  const service = state || {}; // fallback if not found
  const title = service.title || serviceId.replace(/-/g, " ");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


    return (<div >

         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:70}}>
    <Header   />
    </div>

 

          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <ServiceDetails   />
    </div>

 <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <WhyChooseUs  />
    </div>

      <div style={{width:matches?'115%':'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <UserQuery  />
    </div>
  



{
    <div style={{width:matches?'115%':'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Footer />
</div>
} 

    </div>)
}