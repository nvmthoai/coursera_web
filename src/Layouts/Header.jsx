import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Nếu có thể lấy tên từ user context/auth API
  const user = {
    name: "Thoại",
    avatarUrl: "https://i.pravatar.cc/40?img=3", // ảnh avatar mẫu
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-blue-600 w-12 h-12 flex items-center justify-center">
            Coursera
          </div>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium flex justify-around items-center">
          <a
            href="#"
            className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md"
          >
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Coursera
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Auth Button / User Info */}
        <div>
          {!isLoggedIn ? (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => setIsLoggedIn(true)}
            >
              Join Now
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={user.avatarUrl}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
