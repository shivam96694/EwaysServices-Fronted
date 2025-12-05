
import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import Footer from "../Footer";
import AppsComponents from "../AppsComponents";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function AppPage()
{  
      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down("md"));
    

    return (<div >

         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:70}}>
    <Header   />
    </div>

 

          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <AppsComponents   />
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