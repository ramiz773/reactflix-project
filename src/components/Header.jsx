import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <img src={logo} alt="" width={96} />
            </Link>
            <Link to={"/favorites"}>Favorite</Link>
          </div>
          <div className="searchBox">
            <input type="search" className="searchField" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
