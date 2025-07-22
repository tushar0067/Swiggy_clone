import { useEffect, useState } from "react";
import DineRestaurants from "./DineRestaurants";
import Shimmer from "./Shimmer";
export default function RestaurantsChains(){
        const[resChain,setResChain]=useState([])
    useEffect(()=>{
        async function fetchResData(){
            const proxyUrl="https://cors-anywhere.herokuapp.com/";
            const SwiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6633955&lng=77.38737309999999&is-seo-homepage-enabled=true"

            const response = await fetch(proxyUrl+SwiggyAPI)
            const data= await response.json()
            setResChain(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
        }
        fetchResData()
    },[])

    if(resChain.length==0)
        return <Shimmer></Shimmer>

    return (
        <>
        <div className="w-[80%] mx-auto my-10 ">
            <h1 className="text-3xl font-extrabold">Restaurants with online food delivery in Noida 1</h1>
        </div>
        <div className="w-[80%] flex  items-center gap-4 mx-auto mt-5 mb-10   flex-wrap " >
            
            {
                resChain.map(value=><DineRestaurants key={value?.info?.id} value={value} />)
            }
        </div>
        </>
    );
}