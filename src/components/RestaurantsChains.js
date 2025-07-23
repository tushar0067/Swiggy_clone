import { useEffect, useState } from "react";
import DineRestaurants from "./DineRestaurants";
import Shimmer from "./Shimmer";
export default function RestaurantsChains(){
        const[resChain,setResChain]=useState([])
         const [originalData, setOriginalData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("RELEVANCE");
    useEffect(()=>{
        async function fetchResData(){
            const proxyUrl="https://cors-anywhere.herokuapp.com/";
            const SwiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6633955&lng=77.38737309999999&is-seo-homepage-enabled=true"

            const response = await fetch(proxyUrl+SwiggyAPI)
            const data= await response.json()
            setResChain(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setOriginalData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
            
        }
        fetchResData()
    },[])

     const handleFilter = (type) => {
    setSelectedFilter(type);
    let filtered = [...originalData];

    switch (type) {
      case "RATING":
        filtered = filtered.filter(res => res?.info?.avgRating >= 4);
        break;
      case "FAST_DELIVERY":
        filtered = filtered.sort((a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);
        break;
      case "PURE_VEG":
        filtered = filtered.filter(res => res?.info?.veg === true);
        break;
      case "LOW_TO_HIGH":
        filtered = filtered.sort((a, b) => {
          const costA = parseInt(a?.info?.costForTwo?.match(/\d+/)?.[0]) || 0;
          const costB = parseInt(b?.info?.costForTwo?.match(/\d+/)?.[0]) || 0;
          return costA - costB;
        });
        break;
      case "RELEVANCE":
        filtered = [...originalData];
        break;
    }

    setResChain(filtered);
  };

    if (!resChain || resChain.length === 0)
        return <Shimmer></Shimmer>

    return (
        <>
        <div className="w-[80%] mx-auto my-10 ">
            <h1 className="text-3xl font-extrabold">Restaurants with online food delivery in Noida 1</h1>
        </div>

         <div className="w-[80%] flex flex-wrap gap-4 mx-auto mt-4 mb-8">
        <button
          onClick={() => handleFilter("RATING")}
          className={`px-4 py-2 rounded-full border ${selectedFilter === "RATING" ? "bg-black text-white" : "bg-white text-black"} hover:bg-gray-300`}>
          4.0+ Rating
        </button>
        <button
          onClick={() => handleFilter("FAST_DELIVERY")}
          className={`px-4 py-2 rounded-full border ${selectedFilter === "FAST_DELIVERY" ? "bg-black text-white" : "bg-white text-black"} hover:bg-gray-300`}>
          Fast Delivery
        </button>
        <button
          onClick={() => handleFilter("PURE_VEG")}
          className={`px-4 py-2 rounded-full border ${selectedFilter === "PURE_VEG" ? "bg-black text-white" : "bg-white text-black"} hover:bg-gray-300`}>
          Pure Veg
        </button>
        <button
          onClick={() => handleFilter("LOW_TO_HIGH")}
          className={`px-4 py-2 rounded-full border ${selectedFilter === "LOW_TO_HIGH" ? "bg-black text-white" : "bg-white text-black"} hover:bg-gray-300`}>
          Low to High ₹
        </button>
        <button
          onClick={() => handleFilter("RELEVANCE")}
          className={`px-4 py-2 rounded-full border ${selectedFilter === "RELEVANCE" ? "bg-black text-white" : "bg-white text-black"} hover:bg-gray-300`}>
          Relevance
        </button>
      </div>

        <div className="w-[80%] flex  items-center gap-4 mx-auto mt-5 mb-10   flex-wrap " >
            
            {
                resChain.map(value=><DineRestaurants key={value?.info?.id} value={value} />)
            }
        </div>
        </>
    );
}