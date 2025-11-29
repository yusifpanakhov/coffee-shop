import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } if (username === "user" && password === "user") {
      navigate("/user");
    } else {
      setError("Username or password incorrect!");
    }
  };

  return (

  



    <div className="flex items-center justify-center min-h-screen bg-[#F9F8F6]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#EFE9E3] p-10 rounded-3xl shadow-2xl w-96 max-w-full"
      >

       <div className="flex flex-col items-center justify-center mt-[-60px] ">
      <img src="./img/logo.svg" alt="CoffeeShop Logo" className="w-[300px] h-[300px]" />
      </div>

        <h2 className="text-3xl font-extrabold text-[#006442] mb-6 mt-[-20px] text-center">
          CoffeeShop Login
        </h2>
        {error && (
          <p className="text-red-500 font-semibold mb-4 text-center">{error}</p>
        )}
        <div className="mb-4">
          <label className="block text-[#6B4C3B] font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-[#D9CFC7] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006442] transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#6B4C3B] font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#D9CFC7] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006442] transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#006442] hover:bg-[#004d35] text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-110"
        >
          Login
        </button>
        <p className="mt-4 text-center text-[#6B4C3B] text-sm">
          HESABLAR helelik qalacaq burda bunlar narahat olmayin: <br />
          Admin - admin/admin <br />
          User - user/user
        </p>
      </form>
    </div>
  );
}
