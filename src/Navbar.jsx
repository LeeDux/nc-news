import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
