import { useParams } from "react-router";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

export default function SearchBox() {
  const [resName, setResName] = useState("");
  const [food, setFood] = useState("");
  const [allItems, setAllItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchResData() {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6633955&lng=77.38737309999999&restaurantId=${id}`;
      const response = await fetch(proxyUrl + SwiggyAPI);
      const data = await response.json();

      setResName(data?.data?.cards[0]?.card?.card?.text);

      // extract and deduplicate food items
      const cards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const allItemCards = cards
        .filter((item) => item.card?.card?.itemCards)
        .flatMap((item) => item.card.card.itemCards)
        .map((card) => card.card.info);

      // Use Map to filter unique items by ID
      const uniqueItemsMap = new Map();
      allItemCards.forEach((item) => {
        if (!uniqueItemsMap.has(item.id)) {
          uniqueItemsMap.set(item.id, item);
        }
      });

      setAllItems([...uniqueItemsMap.values()]);
    }
    
    fetchResData();
    
  }, [id]);

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(food.toLowerCase())
  );

  return (
    <div className="w-[70%] mx-auto my-16 rounded-2xl p-4">
      <input
        type="text"
        placeholder={`Search inside ${resName}`}
        className="w-full px-4 py-3 rounded-2xl border"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* Show filtered results */}
      <div className="mt-4 space-y-2">
        {filteredItems.length ===0 && food && (
          <p className="text-gray-500">No items found</p>
        )}

        {food.length>1 && filteredItems.map((item) => <MenuItem key={item.id} value={item}></MenuItem>)}
      </div>
    </div>
  );
}
