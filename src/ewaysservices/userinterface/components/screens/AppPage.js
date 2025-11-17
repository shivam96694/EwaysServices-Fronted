
import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import Footer from "../Footer";
import AppsComponents from "../AppsComponents";
export default function AppPage()
{  

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

      <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <UserQuery  />
    </div>
  



{
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Footer />
</div>
} 

    </div>)
}