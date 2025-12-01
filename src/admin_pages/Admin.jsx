import React from "react";
import AdminLayout from "./AdminLayout";

export default function Admin() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-[#006442] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#6B4C3B]">Total Orders</h3>
          <p className="text-4xl font-extrabold mt-2">0</p>
        </div>

        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#6B4C3B]">Number of Coffees</h3>
          <p className="text-4xl font-extrabold mt-2">3</p>
        </div>

        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-[#6B4C3B]">Earned</h3>
          <p className="text-4xl font-extrabold mt-2">0$</p>
        </div>
      </div>

     
      <h2 className="text-2xl font-bold text-[#006442] mb-4">Stock & Coffee Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        

        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#6B4C3B] mb-2">Espresso </h3>
          <p className="text-[#006442]">Stock: 25 kg</p>
          <p className="text-[#006442]">Used: 5 kg</p>
        </div>

        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#6B4C3B] mb-2">Latte </h3>
          <p className="text-[#006442]">Stock: 15 kg</p>
          <p className="text-[#006442]">Used: 3 kg</p>
        </div>

        <div className="bg-[#EFE9E3] p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#6B4C3B] mb-2">Cappuccino </h3>
          <p className="text-[#006442]">Stock: 10 kg</p>
          <p className="text-[#006442]">Used: 2 kg</p>
        </div>

      </div>
    </AdminLayout>
  );
}
