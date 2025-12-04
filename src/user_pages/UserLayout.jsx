import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Home, ShoppingCart, Store } from "lucide-react";

export default function UserLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">

      <div
        className={`bg-[#006442] text-white flex flex-col  transition-all duration-300 ${
          open ? "w-48" : "w-16"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >

        <div className="flex items-center gap-3 p-4 mb-4">
          <Coffee className="w-8 h-8" />
          {open && <span className="text-xl font-bold">Innovation Coffee</span>}
        </div>


        <nav className="flex flex-col gap-4 px-2">
          <Link
            to="/user"
            className="flex items-center gap-3 p-2 hover:bg-[#004f34] rounded transition"
          >
            <Home className="w-6 h-6" />
            {open && "Home"}
          </Link>

         
        </nav>
      </div>


      <div className="flex-1 bg-[#f7f7f7] p-6 overflow-auto">{children}</div>
    </div>
  );
}
