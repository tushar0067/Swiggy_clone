
import {useState } from "react"
import { addItems,incrementItmes,decrementItem } from "../stored/CartSlice";
import { useDispatch, useSelector } from "react-redux";
export default  function MenuItem({value}){
     
    const dispatch=useDispatch();
    const items=useSelector(state=>state.CartSlice.items);
    const element=items.find((item)=>item.id===value.id)
    const count=element?element.quantity:0;
    function handleAddItems(){

        dispatch(addItems(value))

    }
    function handleIncrementItmes(){
        
        dispatch(incrementItmes(value))
    }
    function handleDecrementItmes(){
       
        dispatch(decrementItem(value))

    }
    return (
        <>
        <div className="w-[95%] mx-auto flex justify-between py-10 px-5">
        <div className="w-full ">   
        <h4 className="text-2xl font-bold text-gray-700">{value?.name}</h4>
        <p className="text-lg font-bold">₹{"defaultPrice" in value ?Math.floor(value.defaultPrice/100): Math.floor(value.price/100)}</p>
        <span><p className="my-3 text-green-700 ">{value?.ratings?.aggregatedRating?.rating}
            {" "}
            {value?.ratings?.aggregatedRating?.ratingCountV2 && `(${value.ratings.aggregatedRating.ratingCountV2})`}</p></span>
        <div className="w-[72%]  text-gray-700">
        <h4 className="text-sm ">{value.description}</h4>
        </div>
        </div>
        <div className="w-[25%] h-[190px]   flex items-center relative" >
            <img className="w-[156px] h-[150px] object-cover rounded-md  " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId} alt=" "/>
            
          
           {
  count === 0 ? (
    <button
      className="absolute w-30 bottom-1 left-4 bg-gray-200 px-7 py-2 rounded-xl  text-green-700 font-extrabold transition transform duration-200 hover:bg-gray-300"
      onClick={handleAddItems}
    >
      ADD
    </button>
  ) : (
    <div className="flex gap-2 w-30 absolute bottom-1 justify-center items-center bg-gray-200 left-4  rounded-lg ">
      <button
        className=" px-3 py-2 rounded-xl text-green-700 font-extrabold transition transform duration-200 hover:bg-gray-300"
        onClick={handleDecrementItmes}
      >
        -
      </button>
      <span className="text-2xl  font-bold text-green-700">{count}</span>
      <button
        className=" px-3 py-2 rounded-xl text-green-700 font-extrabold transition transform duration-200 hover:bg-gray-300"
        onClick={handleIncrementItmes}
      >
        +
      </button>
    </div>
  )
}

            
            
           
        </div>
       
        </div>
        <hr className="w-[95%] mx-auto  py-4 px-5"></hr>
       </>
    )
}