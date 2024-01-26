import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBox from "./SearchBox";
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
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
