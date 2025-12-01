import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, drink: "Latte", size: "Large", time: "9:41", used: "35g" },
    { id: 2, drink: "Cappuccino", size: "Medium", time: "9:41", used: "25g" },
    { id: 3, drink: "Americano", size: "Small", time: "9:41", used: "15g" },
  ]);

  const handleReady = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-[#006442] mb-6">Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {orders.map((o) => (
          <div
            key={o.id}
            className="bg-white shadow-xl p-6 rounded-2xl border border-[#EFE9E3] hover:shadow-2xl transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#006442]">{o.drink}</h3>
              <p className="text-[#6B4C3B] mt-2 text-lg">Size: {o.size}</p>
              <p className="text-[#6B4C3B] mt-1">Time: {o.time}</p>

              <div className="mt-3 bg-[#EFE9E3] p-3 rounded-xl">
                <p className="text-[#6B4C3B] font-medium">
                  Used Coffee: <b>{o.used}</b>
                </p>
              </div>
            </div>

            <button
              onClick={() => handleReady(o.id)}
              className="mt-4 w-full bg-[#006442] hover:bg-[#004d35] text-white font-bold py-2 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Ready
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
