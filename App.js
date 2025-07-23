import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";
import RestaurantsChains from "./src/components/RestaurantsChains";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { BrowserRouter,Routes,Route } from "react-router";
import SearchBox from "./src/components/SearchBox";
import { Provider } from "react-redux";
import {store} from "./src/stored/store"
import Checkout from "./src/components/Checkout";
import Navfooter from "./src/components/Navfooter";
import ResNav from "./src/components/ResNav";

function App(){
    return(


    <Provider store={store}>   
    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>
        <Route element ={<Navfooter/>}>
        <Route path="/restaurants" element={<RestaurantsChains/>}></Route>
        <Route path="/city/noida-1/:id" element={<RestaurantMenu/>}></Route>
        
        </Route>
        <Route element ={<ResNav/>}>
        <Route path="/city/noida-1/:id/search" element={<SearchBox/>}></Route>
        </Route>
        <Route path="/checkout" element={<Checkout ></Checkout>}></Route>
        
    </Routes>
    </BrowserRouter>
    </Provider>
    
    )

}
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);