import { categories } from "../utils/locHelper";
import { groceries } from "../utils/grocHelper";
import { forwardRef } from "react";
 const Footer=forwardRef((props,ref)=>{
    return (
    <footer  ref={ref}>
        <div>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
        </div>
        <div className="w-[80%] mx-auto  mt-20">
            <h3 className="text-3xl  ">Cities with Food Delivery</h3>
           <div className="flex  flex-wrap gap-4 py-5 px-2">
            {
                categories.map((item,index)=><div key={`${item.link}-${index}`} className="border-2 border-gray-500 rounded-xl w-50  text-center py-4 my-4 px-3"><a href={item.link}><h3>{item.text}</h3></a></div>)
            }
           </div>
        </div>
        <div className="w-[80%] mx-auto  mt-20">
            <h3 className="text-3xl  ">Cities with Groceries Delivery</h3>
           <div className="flex  flex-wrap gap-4 py-5 px-2">
            {
                groceries.map((item)=><div key={item.link} className="border-2 border-gray-500 rounded-xl w-50  text-center py-4 my-4 px-3"><a href={item.link}><h3>{item.text}</h3></a></div>)
            }
           </div>
           
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
    
    {/* Swiggy Info */}
    <div>
      <h2 className="text-orange-500 font-bold text-2xl mb-2">Swiggy</h2>
      <p className="text-gray-400">© 2025 Bundl Technologies Pvt. Ltd</p>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-semibold mb-3">Company</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Swiggy One</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold mb-3">Contact Us</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#">Help & Support</a></li>
        <li><a href="#">Partner with us</a></li>
        <li><a href="#">Ride with us</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="font-semibold mb-3">Legal</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Refund & Cancellation</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookie Policy</a></li>
      </ul>
    </div>
  </div>

  <hr className="my-8 border-gray-700" />

  {/* Social and Apps */}
  <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 mb-6">
    <p>Made by Tushar</p>
    <div className="flex gap-4">
      <a href="#"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Google Play" className="h-8" /></a>
      <a href="#"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store" className="h-8" /></a>
    </div>
  </div>
    </footer>
    );
})
export default Footer;