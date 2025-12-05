


import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import logo from '../../../../assets/ChatGPT Image Nov 6, 2025, 01_53_39 PM.png';
import EwaysServicesComponents from '../EwayServicesComponents';
import Footer from "../Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function HomePage()
{    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


    return (<div >

         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:70}}>
    <Header   />
    </div>

 <div style={{display:'flex',alignItems:'center',justifyContent:'center',margintop:40}}>
        <img src={logo} style={{objectFit:matches?'contain':'cover',width:'100%',height:matches?'250px':'650px'}} />
        </div>

          <div id="services-section" style={{width:matches?'115%':'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <EwaysServicesComponents   />
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