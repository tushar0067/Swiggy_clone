import { Link } from "react-router";

export default function DineRestaurants({value}){
    return (
        <Link to={"/city/noida-1/"+value?.info?.id}>
        <div className=" w-60 h-60 transition-transform duration-300 hover:scale-95">
            <div className="relative">
               
            <img  className="w-80 h-36 object-cover rounded-xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.cloudinaryImageId}/>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 z-10">
                    <h3 className=" text-white text-xl font-bold">{value?.info?.aggregatedDiscountInfoV3?.header+ " " +value?.info?.aggregatedDiscountInfoV3?.subHeader}</h3>
                </div>
            </div>
            <div className="mt-3 truncate " >
                <h3 className=" w-[95%] mx-auto font-bold">{value?.info.name}</h3>
            </div>
            <div className=" w-[95%] mx-auto flex gap-2">
                <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-1.5 py-0.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5.18 5.05L18.18 22 
                            12 18.27 5.82 22 7 14.32 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>{value?.info?.avgRating}</span>
                </span>
                
                <span className="font-semibold">{value.info.sla.slaString}</span>
            </div>
            <div className=" w-[95%] mx-auto flex gap-2 truncate ">
                <h3 className="text-gray-500">{value?.info?.cuisines?.join(',')}</h3>
                
            </div>
            <div className=" w-[95%] mx-auto flex gap-2 truncate ">
                <h3 className="text-gray-500">{value?.info?.areaName}</h3>
                
            </div>

        </div>
        </Link>
    )
}