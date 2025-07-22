import { useSelector, } from "react-redux";
import { Outlet,Link } from "react-router";



export default function ResNav() {
    const count=useSelector(state=>state.CartSlice.count)
    return(
        // div having  Swwiggy logo and right side Cart
        <div className=" flex flex-col px-10 ">
            <div className="flex justify-between items-center bg-white p-4 shadow-md ">  
                <div className="flex items-center ">
                     <img className="w-40 h-12  bg-[#ff5200] " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"/>
                </div>
                
                <div className="flex items-center">
                 <Link to ="/checkout">
                    <span className="ml-2 text-xl font-semibold bg-[#ff5200] px-3 py-2 text-white"> 🛒 Cart{`: ${count}`}
                        
                    </span>
                </Link>
                </div>
                
            </div>
            
            <Outlet /> 
        </div>
        );
}