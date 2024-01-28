import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBox from "./SearchBox";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
function Header() {
  const { state } = useContext(AppContext);

  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <img src={logo} alt="" width={96} />
            </Link>
            <Link to={"/favorites"}>
              <div className="favCount">
                <span className="count">{state?.favorites?.length}</span>
                Favorite
              </div>
            </Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
