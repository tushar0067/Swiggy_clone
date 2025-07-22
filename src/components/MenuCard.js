import { useState } from "react"
import MenuItem from "./MenuItem"



export default  function MenuCard ({value,foodSelected}){



   if("categories" in value){
    return (
        
        
      <div className="w-full mx-auto  ">
            
            <h1 className="text-lg  font-bold ">{value?.title}</h1>
          
            {
                value?.categories?.map((value)=><MenuCard key={value?.title} foodSelected={foodSelected} value={value}></MenuCard>)
            }
           
        
        </div>
        
    )
   }
    
    const [isOpen,setIsOpen]=useState(true);
    if(!isOpen){
        return (
       
       
        <div className="w-full mx-auto ">
            <div className=" w-[95%] flex justify-between">
            <h1 className="text-lg  font-bold">{value?.title}</h1>
            <button className="bold text-2xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"⌃":"˅"}</button>
        </div>
          <div className="h-3 bg-gray-200 mt-2 mb-2"></div>
         </div>
       
        )
        
    }

    if(foodSelected==="veg"){
        return (
        <div className="w-full mx-auto  ">
            <div className=" w-[95%] flex justify-between">
            <h1 className="text-lg  font-bold pl-5">{value?.title}</h1>
            
            <button onClick={()=>setIsOpen(!isOpen)} className="bold text-2xl">{isOpen?"⌃":"˅"}</button>
            </div>

            {
                value?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((value)=><MenuItem key={value?.card?.info?.id} value={value?.card?.info}></MenuItem>)
            
            }
              <div className="h-5 bg-gray-200"></div>
        </div>
        )
    }
    if(foodSelected==="nonveg"){
        return(
        <div className="w-full mx-auto  ">
            <div className=" w-[95%] flex justify-between">
            <h1 className="text-lg  font-bold pl-5">{value?.title}</h1>
            
            <button onClick={()=>setIsOpen(!isOpen)} className="bold text-2xl">{isOpen?"⌃":"˅"}</button>
            </div>

            {
                value?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((value)=><MenuItem key={value?.card?.info?.id} value={value?.card?.info}></MenuItem>)
            
            }
              <div className="h-5 bg-gray-200"></div>
        </div>
        )
    }
    return (
        
       
        <div className="w-full mx-auto  ">
            <div className=" w-[95%] flex justify-between">
            <h1 className="text-lg  font-bold pl-5">{value?.title}</h1>
            
            <button onClick={()=>setIsOpen(!isOpen)} className="bold text-2xl">{isOpen?"⌃":"˅"}</button>
            </div>

            {
                value?.itemCards?.map((value)=><MenuItem key={value?.card?.info?.id} value={value?.card?.info}></MenuItem>)
            
            }
              <div className="h-5 bg-gray-200"></div>
        </div>
        
        
    )
}