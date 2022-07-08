import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props: any) => {
  const { open } = props;
  return (
    <nav
      className={`float-left ${
        open ? "block absolute" : "hidden"
      } md:w-[10%] md:p-[5rem] md:flex justify-center items-center z-[10] md:block w-[50%] transition-all bg-[#323fd1] max-h-[100vh]`}
    >
      <ul className="h-[50%] flex flex-col justify-evenly items-center mt-[49%] text-white ">
        <li className="flex items-center">
        <i className="fa-solid fa-house"></i>
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
          <Link to="/search">Search</Link>
        </li>
        <li className="flex items-center">
        <i className="fa-solid fa-heart"></i>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li className="flex items-center">
        <i className="fa-solid fa-list-check"></i>
          <Link to="/playlist">Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
