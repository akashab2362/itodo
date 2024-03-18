import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-indigo-800 text-white py-4 sticky top-0">
      <div className="logo">
        <span className="font-bold text-xl mx-8">
          <Link to="/">iTodo</Link>
        </span>
      </div>
      <ul className="flex mx-9 gap-8">
        <li className="cursor-pointer hover:font-bold transition-all">
          <Link to="/login">Login</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
