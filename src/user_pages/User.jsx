import React, { useState } from "react";
import UserLayout from "./UserLayout";

export default function User() {
  const [cart, setCart] = useState([]);


  const drinks = [
    { name: "Latte", prices: { Small: 5, Medium: 6, Large: 7 } },
    { name: "Cappuccino", prices: { Small: 6, Medium: 7, Large: 8 } },
    { name: "Americano", prices: { Small: 4, Medium: 5, Large: 6 } },
  ];

  const addToCart = (drink, size, quantity) => {
    const price = drinks.find((d) => d.name === drink).prices[size];
    setCart([...cart, { drink, size, quantity: Number(quantity), price }]);
  };

  const submitOrder = () => {
    let total = 0;
    let details = cart
      .map(
        (c, i) =>
          `${i + 1}. ${c.drink} - ${c.size} x ${c.quantity} = ${c.price * c.quantity}$`
      )
      .join("\n");
    cart.forEach((c) => (total += c.price * c.quantity));

    alert(`Your order:\n${details}\n\nTotal: ${total}$`);
    setCart([]);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
    
        <div className="bg-yellow-400 p-4 rounded-xl text-center font-bold text-lg shadow-md">
          Only today, buy 1 coffee and get the 2nd free! ☕🔥
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinks.map((d, i) => (
            <div
              key={i}
              className="bg-[#EFE9E3] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#6B4C3B] mb-1">{d.name}</h3>
              <p className="text-[#6B4C3B] font-semibold mb-3">
                Small: {d.prices.Small}$, Medium: {d.prices.Medium}$, Large: {d.prices.Large}$
              </p>

              <select
                className="mt-2 border-2 border-[#6B4C3B] bg-[#FFF5E1] p-2 rounded-lg text-[#6B4C3B] font-semibold hover:border-[#006442] focus:ring-2 focus:ring-[#006442] transition-colors w-full"
                id={`size-${i}`}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <input
                type="number"
                min="1"
                defaultValue="1"
                className="mt-2 border-2 border-[#6B4C3B] bg-[#FFF5E1] p-2 rounded-lg w-full text-[#6B4C3B] font-semibold focus:ring-2 focus:ring-[#006442] transition-colors"
                id={`qty-${i}`}
              />

              <button
                className="mt-4 w-full bg-[#006442] text-white py-2 rounded-xl hover:bg-[#004f34] hover:scale-105 transform transition-all duration-300"
                onClick={() => {
                  const size = document.getElementById(`size-${i}`).value;
                  const quantity = document.getElementById(`qty-${i}`).value;
                  addToCart(d.name, size, quantity);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">Cart</h2>
          {cart.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}
          <div className="space-y-2">
            {cart.map((c, i) => (
              <div
                key={i}
                className="p-3 bg-white rounded-xl shadow flex justify-between items-center"
              >
                <span>
                  {c.drink} - {c.size} x {c.quantity} = {c.price * c.quantity}$
                </span>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                  onClick={() =>
                    setCart(cart.filter((_, index) => index !== i))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <button
              className="mt-4 bg-[#004f34] text-white px-6 py-2 rounded hover:bg-[#00322b] transition-colors"
              onClick={submitOrder}
            >
              Submit Order
            </button>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
