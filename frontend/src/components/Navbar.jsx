 import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [prompt, setprompt] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <div>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-black text-white">
        <h1 className="text-lg md:text-x1  font-extrabold">
          <Link to="/">BlogWebsite</Link>
        </h1>
        {path === "/" && (
          <div
            onChange={(e) => setprompt(e.target.value)}
            className="flex justify-center items-center space-x-0"
          >
            <input
              className="outline-none rounded-xl px-3  text-black bg-white"
              placeholder="search blogs"
              type="text"
            />
            <p
              onClick={() =>
                navigate(prompt ? "?search" + prompt : navigate("/"))
              }
              className="cursor-pointer p-2 bg-black"
            >
              <GoSearch />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
