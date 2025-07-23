import { useDispatch, useSelector } from "react-redux";
import { incrementItmes, decrementItem } from "../stored/CartSlice";

export default function Checkout() {
  const items = useSelector((state) => state.CartSlice.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) =>
      sum + ((item.price || item.defaultPrice || 0) / 100) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6">
      {/* Cart Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6"> Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    ₹
                    {(
                      ((item.price || item.defaultPrice || 0) / 100) *
                      item.quantity
                    ).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="mt-2 flex items-center gap-4">
                    <button
                      onClick={() => dispatch(decrementItem({ id: item.id }))}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="font-medium text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementItmes({ id: item.id }))}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Sidebar */}
      {items.length > 0 && (
        <div className="w-full lg:w-[350px] h-fit bg-white p-6 rounded-xl shadow-lg sticky top-24 self-start">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
             Order Summary
          </h2>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-semibold text-lg mb-6">
            <span>Total Amount</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition shadow-md">
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
}
