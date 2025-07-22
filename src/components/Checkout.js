import { useSelector } from "react-redux"

export default function  Checkout(){
    const items=useSelector((state)=>state.CartSlice.items)
    return(
        <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-[1.01]"
            >
              <img
               src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.locality}, {item.areaName}
                </p>
                <p className="text-gray-700 mt-1">
  🍴 {Array.isArray(item.cuisines) ? item.cuisines.join(", ") : "No cuisines listed"}
</p>
                <p className="text-lg font-medium text-green-600 mt-2">
                  {item.costForTwoMessage}
                </p>
                <p className="text-sm text-yellow-600">⭐ {item.avgRating}</p>
                 <p className="mt-3 text-sm text-gray-600">
                  🧾 Quantity: <span className="font-semibold">{item.quantity}</span>
                </p>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    )
    
}