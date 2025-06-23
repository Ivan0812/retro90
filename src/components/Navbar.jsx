import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Popular", path: "/popular" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <nav className="bg-black text-yellow-400 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">Retro90</h1>
        <ul className="flex space-x-6 relative">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                "relative px-2 py-1 transition " + (isActive ? "text-white" : "")
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;