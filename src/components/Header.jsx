import React from "react";
import Wrapper from "./Wrapper";
function Header() {
   return (
      <header>
         <Wrapper>
            <div className="appHeader">
               <div className="headerLeft">
                  <h1>ReactFlix</h1>
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
