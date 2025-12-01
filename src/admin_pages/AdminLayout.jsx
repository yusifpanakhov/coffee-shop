import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, LayoutDashboard, ClipboardList } from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#F9F8F6] min-h-screen">

      
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`bg-[#006442] text-white transition-all duration-300 px-4 py-6 flex flex-col items-center ${
          open ? "w-48" : "w-16"
        }`}
      >
      
        <div className="flex items-center gap-3 mb-10">
          <Coffee className="w-8 h-8" />
          {open && <span className="text-xl font-bold">Innovation Coffee</span>}
        </div>

      
        <nav className="flex flex-col gap-6 w-full">
          <Link
            to="/admin"
            className="flex items-center gap-3 hover:text-[#C9B59C] transition"
          >
            <LayoutDashboard className="w-6 h-6" />
            {open && <span className="font-medium">Dashboard</span>}
          </Link>

          <Link
            to="/admin/orders"
            className="flex items-center gap-3 hover:text-[#C9B59C] transition"
          >
            <ClipboardList className="w-6 h-6" />
            {open && <span className="font-medium">Orders</span>}
          </Link>
        </nav>
      </div>

      
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
