/*import OnlineDining from "../OnlineDining"
import ImageHeaderComponent from "./ImageHeaderComponent"
import PopularRestaurant from "./PopularRestaurant"
import RestroBuddyApp from "./RestroBuddyApp"
import Footer from "./Footer"
import ExploreComponent from "../ExploreComponent"
import { useEffect,useState } from "react"
import { postData } from "../../../../services/FetchNodeServices"
*/


import WhyChooseUs from "../WhyChooseUs";
import UserQuery from "../UserQuery";
import Header from "../Header";
import logo from '../../../../assets/ChatGPT Image Nov 6, 2025, 01_53_39 PM.png';
import EwaysServicesComponents from '../EwayServicesComponents';
import Footer from "../Footer";
export default function HomePage()
{     
//      const [restaurantList,setRestaurantList]=useState([])
//         const [city,setCity]=useState([])

//     const fetchCityId=async()=>{
//          var res=await postData('userinterface/user_fetch_cityid',{cityname:'Gwalior'})
//         if(res.status)
//         {setCity(res.data)
//             fetchAllRestaurnat(res.data?.cityid)}
//         else
//         {alert ('Unable to fetch restaurant details')}

//     }
   
//     const fetchAllRestaurnat=async(cityid)=>{
//         var res=await postData('userinterface/user_fetch_restaurant_by_city',{cityid})
//         if(res.status)
//         {setRestaurantList(res.data)}
//         else
//         {alert ('Unable to fetch restaurant details')}

//     }

//     useEffect(function(){
//     fetchCityId()
//         },[])
    
   
// var onlinedining=[{id:1,image:'online.jpg',title:'Online Order',description:'Stay home and order to your doorstep',url:`/dininganddelivery/${city?.cityid}/${city?.cityname}/online/0`},
//     {id:2,image:'dining.jpg',title:'Dining',description:"View the city's favorite dining veneus",url:`/dininganddelivery/${city?.cityid}/${city?.cityname}/dining/1`}
// ]

// var explore={"Popular cuisine near me":['Bakery','Coffee','Drinks','Muglai','Chaap','Momos','Chiniese'],
//              "Popular restaurant types near me":['Dhaba',"Cafe's",'Bars','Food Court','Fining Dining','Momos','Sweet Shops'],
//              "Top restaurant chains":['KFC','Subway','Wow Momos','Dominos','Pizza Hut','Burger King',"Mc Donald"],
//              "City we deliver to":['Agra','Indore','Gwalior','Jhansi','Noida','Pune','Chennai','New Delhi'],
// }


    return (<div >

         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:70}}>
    <Header   />
    </div>

 <div style={{display:'flex',alignItems:'center',justifyContent:'center',margintop:40}}>
        <img src={logo} style={{objectFit:'cover',width:'90%',height:'650px'}} />
        </div>

          <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <EwaysServicesComponents   />
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