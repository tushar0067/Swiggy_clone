import { Link } from "react-router";
export default function Header(){
    return(
    <header className="bg-[#ff5200] ">
        <div className=" flex justify-between py-8 mx-35 ">
        <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
        <div className=" font-serif font-bold text-white text-md flex gap-10 items-center">
            <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
            <a  className="border-1 px-3 py-4 rounded-xl" target="_blank" href="https://www.swiggy.com/corporate/">Get the App</a>
            <a className ="bg-black text-center py-4 px-8 rounded-xl" target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
            
        </div>

        </div>

        <div className="relative">
            <div className=" pt-16 pb-8  max-w-[60%] mx-61 flex items-center">
                <p className="text-center font-bold  text-white text-4xl ">Order food & groceries. Discover best restaurants. Swiggy it!</p>
            </div>
            <img  className="absolute top-0 left-0 w-62 h-102" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"/>
            <img className="absolute top-0 right-0 w-62 h-102" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"/>

            <div className=" flex justify-center  gap-7 pb-8">
                <input className="border-1 rounded-xl bg-white px-6 py-3 " type="text" placeholder="3/158 Reajendra Nagar, ..."/>
                <input className="border-1 rounded-xl bg-white w-[35%] px-6 py-3" type="text" placeholder="Search for restaurant ,item or more"></input>
                
            </div>

        </div>

        <div className="container mx-auto flex px-3 py-4 w-[80%] mb-1">
        <Link to="/restaurants">
            <img className="w-81 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img  className="w-81 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"/>
        </a>
        <a href="https://www.swiggy.com/dineout">
            <img className="w-81 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"/>
        </a>
        </div>
    </header>
    );
}
    
