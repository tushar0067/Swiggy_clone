import {foodItems} from "../utils/foodItems"
import FoodShort from "./FoodShort" 
import {instaMartItems} from "../utils/helpInstamart"
import InstaShort from "./InstaShort"
import {dineoutRestaurants}  from "../utils/restaurant"
import Restaurants from "./Restaurants"


export default function Main(){

    return (
        <>
        {/* this is foodItem section */}
        <div className="max-w-[80%]  mt-30 mb-15 container mx-auto  overflow-x-auto flex justify-center items-center gap-5 scrollbar-hide  " >
            {
            
           foodItems.map((value)=><FoodShort key={value.id} foodData={value}></FoodShort>)
            }
        </div>

        {/* This is instamart Section*/}
            <div>
            <div className="max-w-[80%] container mx-auto">
            <h3 className=" font-bold text-2xl ">Shop groceries on Instamart</h3>
            </div>
            <div className="max-w-[80%]  mt-5 mb-15 container mx-auto  overflow-x-auto flex justify-center items-center gap-5 scrollbar-hide ">
            {
             instaMartItems.map((value)=><InstaShort key={value.id} value={value}></InstaShort>)
            }
            </div>
            </div>

            {/* THis is restaurant section */}

        <div>
            <div  className="max-w-[80%] container mx-auto">
            <h3 className=" font-bold text-2xl ">Discover best restaurants on Dineout</h3>
            </div>
           <div className="w-[80%] container mx-auto mt-5 mb-10 overflow-x-auto px-4 flex gap-5 scrollbar-hide">
                {
                    dineoutRestaurants.map((value)=><Restaurants key={value.info.id} value={value}/>)
                }

            </div>
        </div>
        
        </>
    );
}