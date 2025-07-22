import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
   let {id}=useParams();
   
   const[resChain,setResChain]=useState([])
   const[selected,setSelected]=useState(null)
       useEffect(()=>{
           async function fetchResData(){
               const proxyUrl="https://cors-anywhere.herokuapp.com/";
               const SwiggyAPI=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6633955&lng=77.38737309999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
   
               const response = await fetch(proxyUrl+SwiggyAPI)
               const data= await response.json()
               const temp=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const newdata=temp.filter((item)=>'title' in item.card.card);
              
               setResChain(newdata);
               
           }
           fetchResData()
       },[])
    //    console.log(resChain)

       return (
        <div>
            <div className="w-[70%] h-10 text-center text-xl rounded-xl mx-auto border-2 mt-10">
                <Link to={`/city/noida-1/${id}/search`}>
                <p>Search for dishes</p>
                </Link>
            </div>
            <div  className="w-[70%] mx-auto my-10 ">
                <button className={`border-1 px-4 py-2 rounded-lg mx-2 ${selected=="veg"?"bg-green-500":"bg-gray-200"}`}onClick={()=>setSelected(selected==="veg"?null:"veg")}>Veg</button>
                <button className={`border-1 px-4 py-2 rounded-lg mx-2 ${selected=="nonveg"?"bg-red-600":"bg-gray-200"}`} onClick={()=>setSelected(selected==="nonveg"?null:"nonveg")}>Non Veg</button>
            </div>
        <div className="w-[70%] mx-auto my-10 ">
            {
                resChain.map((value)=><MenuCard key={value.card.card.title} value={value.card.card} foodSelected={selected}></MenuCard>)
            }
            
        </div>
        </div>
       );
}